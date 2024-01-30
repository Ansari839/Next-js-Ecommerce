import Image from 'next/image'
import HomeSlider from '@/components/slider'
import TopProducts from '@/components/TopProducts'
export default function Home() {
  return (
    <main>
     <div style={{display:'block'}}>
      <HomeSlider />
      <TopProducts />
     </div>
    </main>
  )
}
