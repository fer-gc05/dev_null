<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { processesData } from '../data/processes'
import ProcessTree from '../components/ProcessTree.vue'
import TerminalSimulator from '../components/TerminalSimulator.vue'
import { t, L } from '../i18n'

const selected = ref(0)
const current = computed(() => processesData[selected.value])
const termRef = ref<InstanceType<typeof TerminalSimulator> | null>(null)

const tryCommand = async (cmd: string, output: string[]) => {
  await termRef.value?.typeCommand(cmd, output)
  await nextTick()
  termRef.value?.$el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

const processCommands: Record<number, { cmd: string; output: string[] }> = {
  0: {
    cmd: 'ps aux | grep php',
    output: [
      'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND',
      'www-data 10452  1.2  0.8 456789 98765 ?        S    10:00   0:05 php-fpm: pool www',
      'www-data 10453  0.8  0.5 234567 43210 ?        S    10:01   0:03 php-fpm: pool www',
      'www-data 10454  0.5  0.3 123456 21098 ?        S    10:02   0:02 php-fpm: pool www'
    ]
  },
  1: {
    cmd: 'systemctl status nginx',
    output: [
      '● nginx.service - A high performance web server and a reverse proxy server',
      '     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)',
      '     Active: active (running) since Mon 2025-01-13 09:00:00 UTC; 2 days ago',
      '       Docs: man:nginx(8)',
      '   Main PID: 567 (nginx)',
      '      Tasks: 5 (limit: 4681)',
      '     Memory: 12.4M',
      '     CGroup: /system.slice/nginx.service',
      '             ├─567 nginx: master process /usr/sbin/nginx -g "daemon off;"',
      '             ├─568 nginx: worker process',
      '             ├─569 nginx: worker process',
      '             └─570 nginx: worker process'
    ]
  },
  2: {
    cmd: 'htop',
    output: [
      '  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND',
      '10452 www-data  20   0  456789  98765  12345 S   1.2   0.8   0:05.23 php-fpm',
      '  567 root      20   0   98765   4321   2345 S   0.0   0.0   0:00.12 nginx',
      '  568 www-data  20   0   98765   8765   4321 S   0.0   0.1   0:00.05 nginx',
      '',
      '[htop - press F1 for help, q to quit]'
    ]
  },
  3: {
    cmd: 'kill -9 10452',
    output: [
      '[1]  + 10452 killed     php-fpm: pool www'
    ]
  }
}
</script>

<template>
  <section class="processes-view">
    <div class="tabs">
      <button
        v-for="(item, index) in processesData"
        :key="index"
        class="tab"
        :class="{ active: selected === index }"
        @click="selected = index"
      >
        {{ L(item.title) }}
      </button>
    </div>

    <div class="process-content">
      <div class="tree-section">
        <ProcessTree />
      </div>

      <div class="terminal-section">
        <TerminalSimulator ref="termRef" />

        <div class="process-actions">
          <button
            class="action-btn"
            @click="tryCommand(processCommands[selected]?.cmd || '', processCommands[selected]?.output || [])"
          >
            {{ t('proc.action.try') }} {{ processCommands[selected]?.cmd }}
          </button>
        </div>

        <div class="process-info">
          <h3>{{ L(current.title) }}</h3>
          <div class="info-label">{{ t('proc.label.what') }}</div>
          <div class="info-content">{{ L(current.desc) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.processes-view {
  width: 100%;
  max-width: 1000px;
}

.tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: 4px;
  margin-bottom: 24px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.tabs::-webkit-scrollbar {
  height: 6px;
}

.tabs::-webkit-scrollbar-track {
  background: transparent;
}

.tabs::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.tab {
  flex-shrink: 0;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500.