'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Typography from '@/components/typography/Typography'
import { capitalize } from 'lodash'

export function CategoryDropdownMenu({
  categories,
  selectedCategory,
  handleCategoryClick,
}: {
  categories: any[]
  selectedCategory: string | null
  handleCategoryClick: (category: string) => void
}) {
  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.name !== selectedCategory)
    : categories

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Click to View Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuSeparator />
        {filteredCategories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            onClick={() => handleCategoryClick(category?.name)}
            className="flex cursor-pointer flex-col items-start"
          >
            <Typography variant="paragraph2" className="pb-0 underline">
              {capitalize(category.name)}
            </Typography>
            {/* <img
              src={category.image}
              alt={category.name}
              className="h-full max-h-40 w-full object-cover"
            /> */}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
