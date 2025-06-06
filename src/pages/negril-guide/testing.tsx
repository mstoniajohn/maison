import Layout from '@/components/layout/Layout'
import NegirlGuideSectionIntro from '@/components/negril-guide/features/NegirlGuideSectionIntro'
import NegrilGuideIntroTitle from '@/components/negril-guide/features/NegrilGuideIntroTitle'

import React, { useState } from 'react'
import useNegrilGuideCategories from '@/hooks/useNegrilGuideCategories'
import useNegrilGuideArticles from '@/hooks/useNegrilGuideArticles'

import { useUser } from '@/hooks/useAuth'

import CategoryContent from '@/components/negril-guide/features/CategoryContent'
import Typography from '@/components/typography/Typography'

import DesktopMultiItemCarousel from '@/components/negril-guide/DesktopMultiItemCarousel'
import NegrilGuideFooter from '@/components/layout/NegrilGuideFooter'
import { Skeleton } from '@/components/ui/skeleton'
import useNegrilGuidePassword from '@/hooks/useNegrilGuidePassword'
import GuideUnlockForm from '@/components/negril-guide/forms/GuideUnlockForm'

function GuidePage() {
  const {
    canView,
    handleClickShowPassword,
    handleMouseDownPassword,
    onChange,
    onSubmit,
    showPassword,
    password,
    negrilGuides,
    createGuideState,
    sectionState,
    deleteGuideState,
  } = useNegrilGuidePassword()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: user } = useUser()
  const isAdmin = user?.is_admin || false

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useNegrilGuideCategories()

  // Fetch articles for the selected category
  const {
    data: articles,
    isLoading: articlesLoading,
    error: articlesError,
    refetch: refreshArticles,
  } = useNegrilGuideArticles(selectedCategory)

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    // Scroll to top of content
    const contentElement = document.querySelector('.content-container')
    if (contentElement) {
      contentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
  }

  return (
    <Layout
      title="Negril Guide"
      showGuideButton={false}
      hideGuideButton={true}
      footerComponent={<NegrilGuideFooter />}
    >
      <>Hi</>
      {/* {canView ? (
        <div className="flex min-h-screen flex-col">
          <div className="flex flex-col  md:flex-row">
            <div className="w-full space-y-4 border-b p-4 text-left md:fixed md:h-screen md:w-[30%] md:border-b-0">
              <hr />
              <NegrilGuideIntroTitle
                selectedCategory={selectedCategory}
                onClickBack={handleBackClick}
              />
            </div>

            <div className="content-container w-full overflow-y-auto p-4 scrollbar-hide md:ml-[30%] md:w-[70%]">
              {!selectedCategory ? (
                <>
                  <NegirlGuideSectionIntro />
                  <hr className="my-4" />
                  {categoriesLoading ? (
                    <></>
                  ) : (
                    <DesktopMultiItemCarousel
                      categories={categories || []}
                      onCategoryClick={handleCategoryClick}
                    />
                  )}
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <CategoryContent
                    selectedCategory={selectedCategory}
                    categories={categories}
                    articles={articles}
                    articlesLoading={articlesLoading}
                    articlesError={articlesError}
                    isAdmin={isAdmin}
                    onBackClick={handleBackClick}
                  />
                  <hr className="my-4" />
                  <Typography
                    variant="h4"
                    className="text-left font-sans font-normal text-blue"
                  >
                    Other Categories
                  </Typography>
                  {categoriesLoading ? (
                    <Skeleton className="h-[200px] w-full" />
                  ) : (
                    <div className="py-4">
                      <DesktopMultiItemCarousel
                        selectedCategory={selectedCategory}
                        categories={categories || []}
                        onCategoryClick={handleCategoryClick}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <GuideUnlockForm
          handleMouseDownPassword={handleMouseDownPassword}
          onSubmit={onSubmit}
          password={password as string}
          showPassword={showPassword}
          onChange={onChange}
          handleClickShowPassword={handleClickShowPassword}
        />
      )} */}
    </Layout>
  )
}

export default GuidePage
