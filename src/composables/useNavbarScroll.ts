import { ref, onMounted, onUnmounted } from 'vue'

export function useNavbarScroll(){
  const isSolid = ref(false)

  const onScroll = () => {
    isSolid.value = window.scrollY > 8
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isSolid }
}


