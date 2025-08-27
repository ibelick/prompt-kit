"use client"

import { cn } from "@/lib/utils"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { motion } from "motion/react"
import * as React from "react"

const Tabs = TabsPrimitive.Root

const TabsContext = React.createContext<string>("")

const TabsRoot = ({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Root>>
}) => {
  const uniqueId = React.useId()
  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  )
}
TabsRoot.displayName = "TabsRoot"

const TabsList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.List>>
}) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 w-full items-center justify-start border-b bg-transparent text-zinc-900 dark:border-zinc-800 dark:text-zinc-50",
      className
    )}
    {...props}
  />
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Trigger>>
}) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [isActive, setIsActive] = React.useState(false)
  const tabsId = React.useContext(TabsContext)

  // Merge refs if both internal and external refs are provided
  const mergedRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      triggerRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [ref]
  )

  React.useEffect(() => {
    const element = triggerRef.current
    if (element) {
      setIsActive(element.dataset.state === "active")

      const observer = new MutationObserver(() => {
        setIsActive(element.dataset.state === "active")
      })

      observer.observe(element, { attributes: true })

      return () => observer.disconnect()
    }
  }, [])

  return (
    <TabsPrimitive.Trigger
      ref={mergedRef}
      className={cn(
        "ring-offset-background focus-visible:ring-ring group text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-none bg-transparent px-4 py-1 pt-2 pb-3 text-sm font-medium whitespace-nowrap transition-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-zinc-950 dark:text-zinc-500 dark:data-[state=active]:text-white",
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layout
          className="absolute bottom-0 flex h-0.5 w-full justify-center"
          transition={{
            type: "spring",
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          layoutId={`underline-${tabsId}`}
        >
          <div className="bg-foreground h-0.5 w-4/5" />
        </motion.div>
      )}
      {children}
    </TabsPrimitive.Trigger>
  )
}
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref?: React.Ref<React.ElementRef<typeof TabsPrimitive.Content>>
}) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "focus-visible:ring-ring relative mt-2 rounded-md ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden",
      className
    )}
    {...props}
  />
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent }
