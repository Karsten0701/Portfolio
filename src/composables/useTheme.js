import { ref } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

function apply() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

export function useTheme() {
  apply()

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    apply()
  }

  return { isDark, toggle }
}
