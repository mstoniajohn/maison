import SkylarkDivider from '@/components/features/SkylarkDivider'

import H1 from '@/components/layout/fonts/H1'
import Paragraph from '@/components/layout/fonts/Paragraph'
import PageWrapper from '@/components/layout/PageWrapper'

import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically load the CheckoutForm to ensure client-side rendering

const GiftCardPdfCopyNoSSR = dynamic(
  () => import('@/components/forms/GiftCardRequestFormCopy'),
  { ssr: false }
)

const CheckoutPage: React.FC = () => {
  return (
    <PageWrapper title="Gift Cards">
      <div>
        <img
          src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1734197620/skylark/Skylark_GiftCard_Art_gplqr2.jpg"
          alt="Skylark Gift Card"
          // width={600}
          // height={300}
          className="mx-auto h-auto w-full max-w-[700px] object-contain"
        />
      </div>
      <div className="container mx-auto max-w-4xl space-y-4">
        <H1 className="text-center">THE GIFT OF SKYLARK</H1>
        <SkylarkDivider />
        <Paragraph>
          Surprise someone special with the gift of Skylark. Our digital gift
          cards can be used towards future hotel stays, as well as charges made
          to the room for food and drink at Miss Lily's at Skylark, Skylark
          Boutique, and treatments at the rooftop Skylark Spa. Please complete
          the form below and we will process your Gift Card and deliver it via
          email within 24 hours.
        </Paragraph>

        <GiftCardPdfCopyNoSSR />
      </div>
    </PageWrapper>
  )
}

export default CheckoutPage
