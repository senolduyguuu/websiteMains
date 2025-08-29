"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

function BlogHero () {
  const router = useRouter()

  return (
    <section className="flex border-t items-center mx-0 md:mx-36 border-x py-6 md:py-10 border-1 border-[#ffffff14] px-4 sm:px-6 lg:px-8 relative">
      <div className='w-full max-w-3xl mx-auto text-center'>
        {/* Blog Badge */}
        <div className='bg-foreground mb-6 border border-[#FFFFFF14] w-fit mx-auto rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm [box-shadow:0px_-3px_2.6px_1px_#C7C7C729_inset,0px_-4px_24.4px_-14px_#E98260_inset] text-[#F4CDC2]'>
          Blogs
        </div>
        {/* Heading */}
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium leading-tight sm:leading-tight md:leading-[68px] text-center tracking-tight underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent mb-4'>
          Stay Updated With
          <br className='hidden sm:block' />
          Latest Product News
        </h2>
        {/* Description */}
        <p className='text-sm sm:text-[14px] mb-6 sm:mb-8 max-w-2xl mx-auto font-normal leading-relaxed sm:leading-[20px] tracking-[-0.006em] text-center underline-offset-[from-font] bg-gradient-to-b from-white to-[#BABABA] bg-clip-text text-transparent'>
          Discover new features, product updates, and valuable insights
          <br className='hidden sm:block' />
          to enhance your development experience.
        </p>
        {/* Button */}
        <div className='text-center'>
          <Button
            className='bg-transparent border-[1px] hover:bg-muted rounded-xl px-3 text-sm sm:text-base'
            variant='gradient'
            size='lg'
            onClick={() => router.push('/blog')}
          >
            See all updates
          </Button>
        </div>
      </div>
    </section>
  )
}

export { BlogHero }
