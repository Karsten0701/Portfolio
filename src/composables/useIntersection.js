import { ref, onMounted } from 'vue'

/**
 * Adds the 'visible' class to an element once it enters the viewport.
 * Used for fade-in animations on scroll.
 */
export function useIntersection() {
  const el = ref(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!el.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el.value)
  })

  return { el, isVisible }
}
