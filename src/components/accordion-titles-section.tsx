import { useState } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import { Text } from '@status-im/components'
import { cx } from 'class-variance-authority'
import Image from 'next/image'

import { ScreenshotImage } from './screenshot-image'

import type { StaticImageData } from 'next/image'

type Props = {
  items: {
    title: string
    description: string
    icon: StaticImageData
    backgroundColor: 'purple' | 'yellow' | 'turquoise' | 'orange'
    image: StaticImageData
  }[]
}
const AccordionTitlesSection = (props: Props) => {
  const { items } = props
  const [value, setValue] = useState(items[0].title)

  const selected = items.find(item => item.title === value)

  return (
    <div className="container flex justify-center">
      <div
        className={cx([
          'flex flex-col gap-12 lg:flex-row lg:items-center xl:gap-[140px]',
        ])}
      >
        <Accordion.Root
          type="single"
          value={value}
          onValueChange={val => setValue(val)}
          className="flex min-h-[410px] flex-col gap-4"
        >
          {items?.map(item => {
            return (
              <Accordion.Item key={item.title} value={item.title} className="">
                <Accordion.Trigger className="accordion-trigger">
                  <div className="flex items-center justify-between">
                    <div className="flex min-w-max items-center gap-3">
                      <div className="flex items-center justify-center">
                        {selected?.title === item.title ? (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            height={48}
                            width={48}
                            className="hidden xl:block"
                          />
                        ) : (
                          <div className="w-[48px]" />
                        )}

                        <p className="text-27 font-semibold lg:text-40 lg:font-bold xl:pl-5">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Accordion.Trigger>
                <Accordion.AccordionContent className="accordion-content">
                  <Accordion.Item
                    className="pb-8 pt-1 xl:pl-[68px]"
                    value={value}
                  >
                    <Text size={19}>{item.description}</Text>
                  </Accordion.Item>
                </Accordion.AccordionContent>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
        {selected && (
          <div className="flex flex-1 justify-center rounded-[32px] pt-8 lg:pt-0">
            <ScreenshotImage
              image={selected.image}
              alt={selected.title}
              color={selected.backgroundColor}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export { AccordionTitlesSection }
