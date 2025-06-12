# prompt-kit

> prompt-kit is a library of customizable, high-quality UI components for AI applications. It provides ready-to-use components for building chat experiences, AI agents, autonomous assistants, and more, with a focus on rapid development and beautiful design.

## Table of Contents

- [Installation](#installation)
- [Introduction](#introduction)
- [Components](#components)
- [Blocks](#blocks)
  - [Prompt input](#prompt-input)
  - [Code block](#code-block)
  - [Markdown](#markdown)
  - [Message](#message)
  - [Chat container](#chat-container)
  - [Scroll button](#scroll-button)
  - [Loader](#loader)
  - [Prompt suggestion](#prompt-suggestion)
  - [Response stream](#response-stream)
  - [Reasoning](#reasoning)
  - [File upload](#file-upload)
  - [Jsx preview](#jsx-preview)
- [Showcase](#showcase)

## Components

import { generateMetadata } from "../utils/metadata"

export const metadata = generateMetadata(
  "Introduction",
  "Introduction to prompt-kit."
)

**prompt-kit** is a set of customizable, high-quality components built for AI applications, making it easy to design chat experiences, AI agents, autonomous assistants, and more, quickly and beautifully.

**prompt-kit** is built on top of shadcn/ui with the same design principles. But instead of helping you build a component library, it helps you build AI interfaces.

This project is a work in progress, and we're continuously improving and expanding the collection. We'd love to hear your feedback or see your contributions as it evolves!

prompt-kit is open source. Check out the code and contribute on [GitHub](https://github.com/ibelick/prompt-kit).


import { generateMetadata } from "../utils/metadata"

export const metadata = generateMetadata(
  "Installation",
  "Installation guide for prompt-kit."
)

# Installation

## Prerequisites

Before installing, ensure you have the following:

- [Node.js](https://nodejs.org/en/download/) version **18** or later
- [React](https://react.dev/) version **19** or later

## Install shadcn/ui

First, you'll need to install and configure shadcn/ui in your project. Follow the installation guide at [shadcn/ui documentation](https://ui.shadcn.com/docs/installation).

Once shadcn/ui is set up, you can install **prompt-kit** components using the **shadcn CLI**.

## Using the shadcn CLI

<CodeBlock
  language="bash"
  code={`npx shadcn@latest add "https://prompt-kit.com/c/[COMPONENT].json"`}
/>

## Usage

After installation, import and start using the components in your project:

<CodeBlock
  language="tsx"
  code={`import { PromptInput } from "@/components/ui/prompt-input";`}
/>


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { PromptInputBasic } from "./prompt-input-basic"
import { PromptInputWithActions } from "./prompt-input-with-actions"

export const metadata = generateMetadata(
  "Prompt Input",
  "An input field that allows users to enter and submit text to an AI model."
)

# Prompt Input

An input field that allows users to enter and submit text to an AI model.

## Examples

### Prompt Input basic

<ComponentCodePreview
  component={<PromptInputBasic />}
  filePath="app/docs/prompt-input/prompt-input-basic.tsx"
  classNameComponentContainer="p-8"
/>

### Prompt Input with actions

You can use `PromptInputActions` to add actions with tooltips to the `PromptInput`.

<ComponentCodePreview
  component={<PromptInputWithActions />}
  filePath="app/docs/prompt-input/prompt-input-with-actions.tsx"
  classNameComponentContainer="p-8"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/prompt-input.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/prompt-input.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### PromptInput

| Prop          | Type                    | Default | Description                                     |
| :------------ | :---------------------- | :------ | :---------------------------------------------- |
| isLoading     | boolean                 | false   | Loading state of the input                      |
| value         | string                  |         | Controlled value of the input                   |
| onValueChange | (value: string) => void |         | Callback when input value changes               |
| maxHeight     | number \| string        | 240     | Maximum height of the textarea in pixels        |
| onSubmit      | () => void              |         | Callback when form is submitted (Enter pressed) |
| children      | React.ReactNode         |         | Child components to render                      |
| className     | string                  |         | Additional CSS classes                          |

### PromptInputTextarea

| Prop            | Type                               | Default | Description                            |
| :-------------- | :--------------------------------- | :------ | :------------------------------------- |
| disableAutosize | boolean                            | false   | Disable automatic height adjustment    |
| className       | string                             |         | Additional CSS classes                 |
| onKeyDown       | (e: KeyboardEvent) => void         |         | Keyboard event handler                 |
| disabled        | boolean                            | false   | Disable the textarea input             |
| ...props        | `React.ComponentProps<"textarea">` |         | All other textarea props are supported |

### PromptInputActions

| Prop      | Type                                   | Default | Description                       |
| :-------- | :------------------------------------- | :------ | :-------------------------------- |
| children  | React.ReactNode                        |         | Child components to render        |
| className | string                                 |         | Additional CSS classes            |
| ...props  | `React.HTMLAttributes<HTMLDivElement>` |         | All other div props are supported |

### PromptInputAction

| Prop      | Type                                   | Default | Description                                     |
| :-------- | :------------------------------------- | :------ | :---------------------------------------------- |
| tooltip   | React.ReactNode                        |         | Content to show in the tooltip                  |
| children  | React.ReactNode                        |         | Child component to trigger the tooltip          |
| className | string                                 |         | Additional CSS classes for the tooltip          |
| side      | "top" \| "bottom" \| "left" \| "right" | "top"   | Position of the tooltip relative to the trigger |
| disabled  | boolean                                | false   | Disable the tooltip trigger                     |
| ...props  | `React.ComponentProps<typeof Tooltip>` |         | All other Tooltip component props are supported |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { CodeBlockBasic } from "./code-block-basic"
import { CodeBlockCSS } from "./code-block-css"
import { CodeBlockNord } from "./code-block-nord"
import { CodeBlockPython } from "./code-block-python"
import { CodeBlockThemed } from "./code-block-themed"
import { CodeBlockWithHeader } from "./code-block-with-header"

export const metadata = generateMetadata(
  "Code Block",
  "A component for displaying code snippets with syntax highlighting and customizable styling."
)

# Code Block

A component for displaying code snippets with syntax highlighting and customizable styling.

## Examples

### Basic Code Block

<ComponentCodePreview
  component={<CodeBlockBasic />}
  filePath="app/docs/code-block/code-block-basic.tsx"
  classNameComponentContainer="p-8"
/>

### Code Block with Header

You can use `CodeBlockGroup` to add a header with metadata and actions to your code blocks.

<ComponentCodePreview
  component={<CodeBlockWithHeader />}
  filePath="app/docs/code-block/code-block-with-header.tsx"
  classNameComponentContainer="p-8"
/>

### Different Languages

You can highlight code in various languages by changing the `language` prop.

#### Python Example

<ComponentCodePreview
  component={<CodeBlockPython />}
  filePath="app/docs/code-block/code-block-python.tsx"
  classNameComponentContainer="p-8"
/>

#### CSS Example

<ComponentCodePreview
  component={<CodeBlockCSS />}
  filePath="app/docs/code-block/code-block-css.tsx"
  classNameComponentContainer="p-8"
/>

### Different Themes

Shiki supports many popular themes. Here are some examples:

#### GitHub Dark Theme

<ComponentCodePreview
  component={<CodeBlockThemed />}
  filePath="app/docs/code-block/code-block-themed.tsx"
  classNameComponentContainer="p-8"
/>

#### Nord Theme

<ComponentCodePreview
  component={<CodeBlockNord />}
  filePath="app/docs/code-block/code-block-nord.tsx"
  classNameComponentContainer="p-8"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/code-block.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/code-block.tsx" language="tsx" />

<Step>Install the required dependencies.</Step>

<CodeBlock code={`npm install shiki`} language="bash" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### CodeBlock

| Prop      | Type                              | Default | Description                |
| :-------- | :-------------------------------- | :------ | :------------------------- |
| children  | React.ReactNode                   |         | Child components to render |
| className | string                            |         | Additional CSS classes     |
| ...props  | `React.HTMLProps<HTMLDivElement>` |         | All other div props        |

### CodeBlockCode

| Prop      | Type                              | Default        | Description                          |
| :-------- | :-------------------------------- | :------------- | :----------------------------------- |
| code      | string                            |                | The code to display and highlight    |
| language  | string                            | "tsx"          | The language for syntax highlighting |
| theme     | string                            | "github-light" | The theme for syntax highlighting    |
| className | string                            |                | Additional CSS classes               |
| ...props  | `React.HTMLProps<HTMLDivElement>` |                | All other div props                  |

### CodeBlockGroup

| Prop      | Type                                   | Default | Description                |
| :-------- | :------------------------------------- | :------ | :------------------------- |
| children  | React.ReactNode                        |         | Child components to render |
| className | string                                 |         | Additional CSS classes     |
| ...props  | `React.HTMLAttributes<HTMLDivElement>` |         | All other div props        |

## Usage with Markdown

The `CodeBlock` component is used internally by the `Markdown` component to render code blocks in markdown content. When used within the `Markdown` component, code blocks are automatically wrapped with the `not-prose` class to prevent conflicts with prose styling.

<CodeBlock
  code={`import { Markdown } from "@/components/prompt-kit/markdown"

function MyComponent() {
const markdownContent = \` # Example

    \\\`\\\`\\\`javascript
    function greet(name) {

    return \`Hello, \\\${name}!\\\`;
    }
    \\\`\\\`\\\`

    return <Markdown className="prose">{markdownContent}</Markdown>

}`}
language="tsx"
/>

## Tailwind Typography and not-prose

The `CodeBlock` component includes the `not-prose` class by default to prevent Tailwind Typography's prose styling from affecting code blocks. This is important when using the [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin, which provides beautiful typography defaults but can interfere with code block styling.

Since code blocks are styled with Shiki for syntax highlighting, they should not inherit Tailwind Typography styles. The `not-prose` class ensures that code blocks maintain their intended appearance regardless of the surrounding typography context.

<CodeBlock
  code={`<article className="prose">
  <h1>My Content</h1>
  <p>This content has prose styling applied.</p>
  
  {/* The CodeBlock has not-prose to prevent prose styling */}
  <CodeBlock>
    <CodeBlockCode code={code} language="javascript" />
  </CodeBlock>
</article>`}
  language="tsx"
/>

## Customizing Syntax Highlighting

The `CodeBlockCode` component uses [Shiki](https://shiki.matsu.io/) for syntax highlighting. You can customize the theme by passing a different theme name to the `theme` prop.

Shiki supports many popular themes including:

- github-light (default)
- github-dark
- dracula
- nord
- and more.

For a complete list of supported themes, refer to the [Shiki documentation](https://github.com/shikijs/shiki/blob/main/docs/themes.md).


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { MarkdownBasic } from "./markdown-basic"
import { MarkdownCustomComponents } from "./markdown-custom-components"

export const metadata = generateMetadata(
  "Markdown",
  "A component for rendering Markdown content with support for GitHub Flavored Markdown (GFM) and custom component styling."
)

# Markdown

A component for rendering Markdown content with support for GitHub Flavored Markdown (GFM) and custom component styling.

## Examples

### Basic Markdown

Render basic Markdown with support for bold, italics, lists, code blocks and more.

<ComponentCodePreview
  component={<MarkdownBasic />}
  filePath="app/docs/markdown/markdown-basic.tsx"
  classNameComponentContainer="p-8"
  disableNotProse
/>

### Markdown with Custom Components

You can customize how different Markdown elements are rendered by providing custom components.

<ComponentCodePreview
  component={<MarkdownCustomComponents />}
  filePath="app/docs/markdown/markdown-custom-components.tsx"
  classNameComponentContainer="p-8"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/markdown.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/markdown.tsx" language="tsx" />

<Step>Install the required dependencies.</Step>

<CodeBlock
  code={`npm install react-markdown remark-gfm remark-breaks`}
  language="bash"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### Markdown

| Prop       | Type                                         | Default            | Description                                     |
| :--------- | :------------------------------------------- | :----------------- | :---------------------------------------------- |
| children   | string                                       |                    | Markdown content to render                      |
| className  | string                                       |                    | Additional CSS classes                          |
| components | `Partial<Components>`                        | INITIAL_COMPONENTS | Custom components to override default rendering |
| ...props   | `React.ComponentProps<typeof ReactMarkdown>` |                    | All other ReactMarkdown props                   |

## Performance Optimization

The Markdown component employs advanced memoization techniques to optimize rendering performance, especially in streaming AI response scenarios. This approach is crucial when rendering chat interfaces where new tokens are continuously streamed.

### How Memoization Works

Our implementation:

1. Splits Markdown content into discrete semantic blocks using the `marked` library
2. Memoizes each block individually with React's `memo`
3. Only re-renders blocks that have actually changed when new content arrives
4. Preserves already rendered blocks to prevent unnecessary re-parsing and re-rendering

This pattern significantly improves performance in chat applications by preventing the entire message history from re-rendering with each new token, which becomes increasingly important as conversations grow longer.

For AI chat interfaces using streaming responses, always provide a unique `id` prop (typically the message ID) to ensure proper block caching:

<CodeBlock
  code={`<Markdown id={message.id}>{message.content}</Markdown>`}
  language="tsx"
/>

This memoization implementation is based on the [Vercel AI SDK Cookbook](https://sdk.vercel.ai/cookbook/next/markdown-chatbot-with-memoization) with enhancements for better React integration.

## Customizing Components

You can customize how different Markdown elements are rendered by providing a `components` prop. This is an object where keys are HTML element names and values are React components.

<CodeBlock code={`const customComponents = {
    h1: ({ children }) => <h1 className="text-2xl font-bold text-blue-500">{children}</h1>,
    a: ({ href, children }) => <a href={href} className="text-purple-500 underline">{children}</a>,
    // ... other components
}

<Markdown components={customComponents}>{markdownContent}</Markdown>
`} language="tsx" />

## Supported Markdown Features

The Markdown component uses [react-markdown](https://github.com/remarkjs/react-markdown) with [remark-gfm](https://github.com/remarkjs/remark-gfm) to support GitHub Flavored Markdown, which includes:

- Tables
- Strikethrough
- Tasklists
- Literal URLs
- Footnotes

Additionally, the component includes built-in code block highlighting through the `CodeBlock` component.

## Styling with Tailwind Typography

For the best typography styling experience, we recommend using the [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin. This plugin provides a set of `prose` classes that add beautiful typographic defaults to your markdown content.

<CodeBlock code={`npm install -D @tailwindcss/typography`} language="bash" />

When using the Markdown component with Tailwind Typography, you can apply the `prose` class:

<CodeBlock
  code={`<Markdown className="prose dark:prose-invert">{markdownContent}</Markdown>`}
  language="tsx"
/>

### Handling Code Blocks

As you've seen in our examples, code blocks within prose content can sometimes cause styling conflicts. The Tailwind Typography plugin provides a `not-prose` class to exclude elements from prose styling:

<CodeBlock code={`<article className="prose">
    <h1>My Content</h1>
    <p>Regular content with prose styling...</p>

    <div className="not-prose">
      <!-- Code blocks or other elements that shouldn't inherit prose styles -->
    </div>

</article>
`} language="tsx" />


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { MessageBasic } from "./message-basic"
import { MessageWithActions } from "./message-with-actions"
import { MessageWithMarkdown } from "./message-with-markdown"

export const metadata = generateMetadata(
  "Message",
  "A component for displaying messages in a conversation interface, with support for avatars, markdown content, and interactive actions."
)

# Message

A component for displaying messages in a conversation interface, with support for avatars, markdown content, and interactive actions.

## Examples

### Basic Message

<ComponentCodePreview
  component={<MessageBasic />}
  filePath="app/docs/message/message-basic.tsx"
  classNameComponentContainer="p-8"
/>

### Message with Markdown

The `markdown` prop enables rendering content as [Markdown](/docs/markdown), perfect for rich text formatting in messages.

<ComponentCodePreview
  component={<MessageWithMarkdown />}
  filePath="app/docs/message/message-with-markdown.tsx"
  classNameComponentContainer="p-8"
  disableNotProse
/>

### Message with Actions

You can use `MessageActions` and `MessageAction` to add interactive elements to your messages.

<ComponentCodePreview
  component={<MessageWithActions />}
  filePath="app/docs/message/message-with-actions.tsx"
  classNameComponentContainer="p-8"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/message.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/message.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### Message

| Prop      | Type                              | Default | Description                |
| :-------- | :-------------------------------- | :------ | :------------------------- |
| children  | React.ReactNode                   |         | Child components to render |
| className | string                            |         | Additional CSS classes     |
| ...props  | `React.HTMLProps<HTMLDivElement>` |         | All other div props        |

### MessageAvatar

| Prop      | Type   | Default | Description                            |
| :-------- | :----- | :------ | :------------------------------------- |
| src       | string |         | URL of the avatar image                |
| alt       | string |         | Alt text for the avatar image          |
| fallback  | string |         | Text to display if image fails to load |
| delayMs   | number |         | Delay before showing fallback (in ms)  |
| className | string |         | Additional CSS classes                 |

### MessageContent

| Prop      | Type                              | Default | Description                           |
| :-------- | :-------------------------------- | :------ | :------------------------------------ |
| children  | React.ReactNode                   |         | Content to display in the message     |
| markdown  | boolean                           | false   | Whether to render content as markdown |
| className | string                            |         | Additional CSS classes                |
| ...props  | `React.HTMLProps<HTMLDivElement>` |         | All other div props                   |

### MessageActions

| Prop      | Type                              | Default | Description                |
| :-------- | :-------------------------------- | :------ | :------------------------- |
| children  | React.ReactNode                   |         | Child components to render |
| className | string                            |         | Additional CSS classes     |
| ...props  | `React.HTMLProps<HTMLDivElement>` |         | All other div props        |

### MessageAction

| Prop      | Type                                   | Default | Description                                     |
| :-------- | :------------------------------------- | :------ | :---------------------------------------------- |
| tooltip   | React.ReactNode                        |         | Content to show in the tooltip                  |
| children  | React.ReactNode                        |         | Child component to trigger the tooltip          |
| className | string                                 |         | Additional CSS classes for the tooltip          |
| side      | "top" \| "bottom" \| "left" \| "right" | "top"   | Position of the tooltip relative to the trigger |
| ...props  | `React.ComponentProps<typeof Tooltip>` |         | All other Tooltip component props               |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { ChatBasic } from "./chat-basic"
import { ChatWithCustomScroll } from "./chat-with-custom-scroll"

export const metadata = generateMetadata(
  "Chat Container",
  "A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces."
)

# Chat Container

A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces.

## Examples

### Chat container basic

<ComponentCodePreview
  component={<ChatWithCustomScroll />}
  filePath="app/docs/chat-container/chat-with-custom-scroll.tsx"
  classNameComponentContainer="p-0"
/>

### Streaming Text Example

A chat container that demonstrates text streaming with automatic scrolling. Click the "Show Streaming" button to see a simulated streaming response with the smart auto-scroll behavior in action.

<ComponentCodePreview
  component={<ChatBasic />}
  filePath="app/docs/chat-container/chat-basic.tsx"
  classNameComponentContainer="p-0"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/chat-container.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/chat-container.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

The ChatContainer is built using three separate components that work together:

### ChatContainerRoot

The main container that provides auto-scrolling functionality using the `use-stick-to-bottom` library.

| Prop      | Type                                   | Default | Description                                     |
| :-------- | :------------------------------------- | :------ | :---------------------------------------------- |
| children  | React.ReactNode                        |         | Child components to render inside the container |
| className | string                                 |         | Additional CSS classes                          |
| ...props  | React.HTMLAttributes\<HTMLDivElement\> |         | All other div props                             |

### ChatContainerContent

The content wrapper that should contain your messages.

| Prop      | Type                                   | Default | Description                                             |
| :-------- | :------------------------------------- | :------ | :------------------------------------------------------ |
| children  | React.ReactNode                        |         | Child components to render inside the content container |
| className | string                                 |         | Additional CSS classes                                  |
| ...props  | React.HTMLAttributes\<HTMLDivElement\> |         | All other div props                                     |

### ChatContainerScrollAnchor

An optional scroll anchor element that can be used for scroll targeting.

| Prop      | Type                                   | Default | Description                                |
| :-------- | :------------------------------------- | :------ | :----------------------------------------- |
| className | string                                 |         | Additional CSS classes                     |
| ref       | React.RefObject\<HTMLDivElement\>      |         | Optional ref for the scroll anchor element |
| ...props  | React.HTMLAttributes\<HTMLDivElement\> |         | All other div props                        |

## Auto-Scroll Behavior

The component uses the `use-stick-to-bottom` library to provide sophisticated auto-scrolling:

- **Smooth Animations**: Uses velocity-based spring animations for natural scrolling
- **Content Resizing**: Automatically detects content changes using ResizeObserver API
- **User Control**: Automatically disables sticky behavior when users scroll up
- **Mobile Support**: Works seamlessly on touch devices
- **Performance**: Zero dependencies and optimized for chat applications
- **Scroll Anchoring**: Prevents content jumping when new content is added above the viewport

Key behaviors:

- **Stick to Bottom**: Automatically scrolls to bottom when new content is added (if already at bottom)
- **Smart Scrolling**: Only scrolls when user is at the bottom, preserves scroll position otherwise
- **Cancel on Scroll**: User can scroll up to cancel auto-scrolling behavior
- **Resume Auto-Scroll**: Returns to auto-scrolling when user scrolls back to bottom

## Using with ScrollButton

The ChatContainer pairs perfectly with the ScrollButton component. The ScrollButton automatically appears when the user scrolls up and disappears when at the bottom:

<CodeBlock
  code={`import { ChatContainerRoot, ChatContainerContent, 
ChatContainerScrollAnchor } from "@/components/prompt-kit/chat-container"
import { ScrollButton } from "@/components/prompt-kit/scroll-button"

function ChatInterface() {
return (

<div className="relative h-[500px]">
  <ChatContainerRoot className="h-full">
    <ChatContainerContent className="space-y-4">
      {/* Your chat messages here */}
      <div>Message 1</div>
      <div>Message 2</div>
      <div>Message 3</div>
    </ChatContainerContent>
    <ChatContainerScrollAnchor />
    <div className="absolute right-4 bottom-4">
      <ScrollButton className="shadow-sm" />
    </div>
  </ChatContainerRoot>
</div>
) } `} language="tsx" />


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { ScrollButtonBasic } from "./scroll-button-basic"
import { ScrollButtonCustom } from "./scroll-button-custom"
import { ScrollButtonWithChat } from "./scroll-button-with-chat"

export const metadata = generateMetadata(
  "Scroll Button",
  "A floating button that appears when the user scrolls up and lets them return to the bottom of the chat."
)

# Scroll Button

A minimal floating button that appears when the user scrolls up, allowing them to jump back to the bottom of the chat.

## Usage

The `ScrollButton` only works inside `ChatContainerRoot`, which uses `use-stick-to-bottom` under the hood.  
It **will not work** with a plain `div` or custom scroll container.

## Examples

### Basic Scroll Button

A simple implementation of the scroll button that appears when scrolling up and disappears when at the bottom of the container.

<ComponentCodePreview
  component={<ScrollButtonBasic />}
  filePath="app/docs/scroll-button/scroll-button-basic.tsx"
  classNameComponentContainer="p-0"
/>

### Custom Scroll Button

Customize the appearance and behavior of the scroll button with different variants, sizes, and threshold values.

<ComponentCodePreview
  component={<ScrollButtonCustom />}
  filePath="app/docs/scroll-button/scroll-button-custom.tsx"
  classNameComponentContainer="p-0"
/>

### With Chat Container

The ScrollButton works perfectly with ChatContainer for chat interfaces, providing an easy way for users to navigate long conversations.

<ComponentCodePreview
  component={<ScrollButtonWithChat />}
  filePath="app/docs/scroll-button/scroll-button-with-chat.tsx"
  classNameComponentContainer="p-0"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/scroll-button.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/scroll-button.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### ScrollButton

| Prop         | Type                                            | Default   | Description                                          |
| :----------- | :---------------------------------------------- | :-------- | :--------------------------------------------------- |
| scrollRef    | React.RefObject\<HTMLElement\>                  |           | Reference to the element to scroll to                |
| containerRef | React.RefObject\<HTMLElement\>                  |           | Reference to the scrollable container                |
| className    | string                                          |           | Additional CSS classes                               |
| threshold    | number                                          | 50        | Distance from bottom (in px) to show/hide the button |
| variant      | "default" \| "outline" \| "ghost" \| etc.       | "outline" | Button variant from your UI button component         |
| size         | "default" \| "sm" \| "lg" \| etc.               | "sm"      | Button size from your UI button component            |
| ...props     | React.ButtonHTMLAttributes\<HTMLButtonElement\> |           | All other button props                               |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { LoaderBasic } from "./loader-basic"
import { LoaderSizes } from "./loader-sizes"
import { LoaderWithText } from "./loader-with-text"

export const metadata = generateMetadata(
  "Loader",
  "A loading component with multiple variants to indicate processing states and provide visual feedback to users during wait times."
)

# Loader

A loading component with multiple variants to indicate processing states and provide visual feedback to users during wait times.

## Examples

### Basic Loader

Showcasing all available loader variants with default settings.

<ComponentCodePreview
  component={<LoaderBasic />}
  filePath="app/docs/loader/loader-basic.tsx"
  classNameComponentContainer="p-0"
/>

### Loader Sizes

Customize the size of any loader variant with predefined size options.

<ComponentCodePreview
  component={<LoaderSizes />}
  filePath="app/docs/loader/loader-sizes.tsx"
  classNameComponentContainer="p-0"
/>

### Loader With Text

Some loader variants support displaying custom text while loading.

<ComponentCodePreview
  component={<LoaderWithText />}
  filePath="app/docs/loader/loader-with-text.tsx"
  classNameComponentContainer="p-0 min-h-auto items-start"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/loader.json"`}
  language="bash"
/>

_Note: If you are using Tailwind CSS v4, you may have to grab the keyframes and add them to your global.css file manually. Check manual installation for more details._

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following into your global.css file.</Step>

<CodeBlock language="css" code={`@keyframes typing {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-2px);
    opacity: 1;
  }
}

@keyframes loading-dots {
0%,
100% {
opacity: 0;
}
50% {
opacity: 1;
}
}

@keyframes wave {
0%,
100% {
transform: scaleY(1);
}
50% {
transform: scaleY(0.6);
}
}

@keyframes blink {
0%,
100% {
opacity: 1;
}
50% {
opacity: 0;
}
}

@keyframes text-blink {
0%,
100% {
color: var(--primary);
}
50% {
color: var(--muted-foreground);
}
}

@keyframes bounce-dots {
0%,
100% {
transform: scale(0.8);
opacity: 0.5;
}
50% {
transform: scale(1.2);
opacity: 1;
}
}

@keyframes thin-pulse {
0%,
100% {
transform: scale(0.95);
opacity: 0.8;
}
50% {
transform: scale(1.05);
opacity: 0.4;
}
}

@keyframes pulse-dot {
0%,
100% {
transform: scale(1);
opacity: 0.8;
}
50% {
transform: scale(1.5);
opacity: 1;
}
}

@keyframes shimmer-text {
0% {
background-position: 150% center;
}
100% {
background-position: -150% center;
}
}

@keyframes wave-bars {
0%,
100% {
transform: scaleY(1);
opacity: 0.5;
}
50% {
transform: scaleY(0.6);
opacity: 1;
}
}

@keyframes shimmer {
0% {
background-position: 200% 50%;
}
100% {
background-position: -200% 50%;
}
}

@keyframes spinner-fade {
0% {
opacity: 0;
}
100% {
opacity: 1;
}
}`} />

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/loader.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### Loader

| Prop      | Type                                                                                                                                                          | Default    | Description                              |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------- | :--------------------------------------- |
| variant   | "circular" \| "classic" \| "pulse" \| "pulse-dot" \| "dots" \| "typing" \| "wave" \| "bars" \| "terminal" \| "text-blink" \| "text-shimmer" \| "loading-dots" | "circular" | The visual style of the loader           |
| size      | "sm" \| "md" \| "lg"                                                                                                                                          | "md"       | The size of the loader                   |
| text      | string                                                                                                                                                        |            | Text to display (for supported variants) |
| className | string                                                                                                                                                        |            | Additional CSS classes                   |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { PromptSuggestionBasic } from "./prompt-suggestion-basic"
import { PromptSuggestionHighlight } from "./prompt-suggestion-highlight"
import { PromptSuggestionVariants } from "./prompt-suggestion-variants"

export const metadata = generateMetadata(
  "Prompt Suggestion",
  "A component for implementing interactive prompt suggestions in AI interfaces. The PromptSuggestion component offers two distinct modes: Normal Mode and Highlight Mode."
)

# Prompt Suggestion

A component for implementing interactive prompt suggestions in AI interfaces. The PromptSuggestion component offers two distinct modes:

- **Normal Mode**: Renders clickable, pill-shaped buttons ideal for suggesting quick prompts in chat interfaces
- **Highlight Mode**: Provides text highlighting to highlight a part of the suggestion

## Examples

### Basic Usage

Display clickable prompt suggestions that users can select to populate an input field. You can easily use it with the [PromptInput](/docs/prompt-input) component.

<ComponentCodePreview
  component={<PromptSuggestionBasic />}
  filePath="app/docs/prompt-suggestion/prompt-suggestion-basic.tsx"
  classNameComponentContainer="p-8"
/>

### Highlighted Prompt Suggestions

Implement prompt suggestions with search term highlighting. It's perfect to showcase a list of related prompts.

<ComponentCodePreview
  component={<PromptSuggestionHighlight />}
  filePath="app/docs/prompt-suggestion/prompt-suggestion-highlight.tsx"
  classNameComponentContainer="p-8"
/>

### Complete Chat Interface

Build a full-featured chat interface with dynamic prompt suggestions that switch between both modes.

<ComponentCodePreview
  component={<PromptSuggestionVariants />}
  filePath="app/docs/prompt-suggestion/prompt-suggestion-variants.tsx"
  classNameComponentContainer="p-8 h-[500px]"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/prompt-suggestion.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock
  filePath="components/prompt-kit/prompt-suggestion.tsx"
  language="tsx"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### PromptSuggestion

| Prop      | Type                                               | Default   | Description                                                                    |
| :-------- | :------------------------------------------------- | :-------- | :----------------------------------------------------------------------------- |
| children  | React.ReactNode                                    |           | Content to display in the suggestion button                                    |
| variant   | "default" \| "destructive" \| "outline" \| "ghost" | "outline" | Visual variant of the button (normal mode) or "ghost" (highlight mode)         |
| size      | "default" \| "sm" \| "lg" \| "icon"                | "lg"      | Size of the button (normal mode) or "sm" (highlight mode)                      |
| highlight | string                                             | undefined | When provided, enables highlight mode and highlights this text within children |
| className | string                                             |           | Additional CSS classes                                                         |
| ...props  | ButtonHTMLAttributes                               |           | All other button HTML attributes (including onClick)                           |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { ResponseStreamFade } from "./response-stream-fade"
import { ResponseStreamTypewriter } from "./response-stream-typewriter"
import { ResponseStreamWithMarkdown } from "./response-stream-with-markdown"
import { UseTextStreamExample } from "./use-text-stream-example"

export const metadata = generateMetadata(
  "Response Stream",
  "A component to simulate streaming text on the client side, perfect for fake responses, or any controlled progressive text display."
)

# Response Stream

A component to simulate streaming text on the client side, perfect for fake responses, or any controlled progressive text display.

## Examples

### Typewriter Mode

The default mode that types out text character by character, simulating a typing effect.

<ComponentCodePreview
  component={<ResponseStreamTypewriter />}
  filePath="app/docs/response-stream/response-stream-typewriter.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[150px]"
  hasReTrigger
/>

### Fade Mode

The fade mode reveals text word by word with a smooth fade-in animation.

<ComponentCodePreview
  component={<ResponseStreamFade />}
  filePath="app/docs/response-stream/response-stream-fade.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[150px]"
  hasReTrigger
/>

### With Markdown

ResponseStream can be combined with the Markdown component to create rich, animated content, for that you need to use the `useTextStream` hook directly.

Note: If you want to use mode="fade", you need to manually render the segments with appropriate CSS animations.
It can be hard to get it done with markdown, the way is to write a custom `remarkPlugins`. We have a demo but it's a bit too experimental to be included here, happy to receive a PR if you have a good solution.

<ComponentCodePreview
  component={<ResponseStreamWithMarkdown />}
  filePath="app/docs/response-stream/response-stream-with-markdown.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[400px]"
  disableNotProse
  hasReTrigger
/>

### Using the useTextStream Hook with fade mode

When using the useTextStream hook with `fade` mode, you need to manually render the segments with appropriate CSS animations.

<ComponentCodePreview
  component={<UseTextStreamExample />}
  filePath="app/docs/response-stream/use-text-stream-example.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[200px]"
  hasReTrigger
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/response-stream.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock
  filePath="components/prompt-kit/response-stream.tsx"
  language="tsx"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### ResponseStream

| Prop               | Type                              | Default      | Description                                                  |
| :----------------- | :-------------------------------- | :----------- | :----------------------------------------------------------- |
| textStream         | string \| AsyncIterable\<string\> |              | The text to stream or an async iterable of text chunks       |
| mode               | "typewriter" \| "fade"            | "typewriter" | The animation mode to use                                    |
| speed              | number                            | 20           | Speed from 1-100, where 1 is slowest and 100 is fastest      |
| className          | string                            | ""           | Additional CSS classes                                       |
| onComplete         | () => void                        |              | Callback function when streaming is complete                 |
| as                 | string                            | "div"        | Element type to render                                       |
| fadeDuration       | number                            |              | Custom fade duration in ms (overrides speed)                 |
| segmentDelay       | number                            |              | Custom delay between segments in ms (overrides speed)        |
| characterChunkSize | number                            |              | Custom characters per frame for typewriter (overrides speed) |

### useTextStream Hook

#### Parameters

| Parameter          | Type                              | Default      | Description                                                  |
| :----------------- | :-------------------------------- | :----------- | :----------------------------------------------------------- |
| textStream         | string \| AsyncIterable\<string\> |              | The text to stream or an async iterable of text chunks       |
| speed              | number                            | 20           | Speed from 1-100, where 1 is slowest and 100 is fastest      |
| mode               | "typewriter" \| "fade"            | "typewriter" | The animation mode to use                                    |
| onComplete         | () => void                        |              | Callback function when streaming is complete                 |
| fadeDuration       | number                            |              | Custom fade duration in ms (overrides speed)                 |
| segmentDelay       | number                            |              | Custom delay between segments in ms (overrides speed)        |
| characterChunkSize | number                            |              | Custom characters per frame for typewriter (overrides speed) |
| onError            | (error: unknown) => void          |              | Callback function when an error occurs                       |

#### Return Value

| Property        | Type                                | Description                               |
| :-------------- | :---------------------------------- | :---------------------------------------- |
| displayedText   | string                              | The current text being displayed          |
| isComplete      | boolean                             | Whether streaming is complete             |
| segments        | `{ text: string; index: number }[]` | Text segments for fade mode               |
| getFadeDuration | () => number                        | Function to get the current fade duration |
| getSegmentDelay | () => number                        | Function to get the current segment delay |
| reset           | () => void                          | Function to reset the streaming state     |
| startStreaming  | () => void                          | Function to start or restart streaming    |
| pause           | () => void                          | Function to pause streaming               |
| resume          | () => void                          | Function to resume streaming              |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { ReasoningBasic } from "./reasoning-basic"
import { ReasoningMarkdown } from "./reasoning-markdown"

export const metadata = generateMetadata(
  "Reasoning",
  "A collapsible component for showing AI reasoning, explanations, or logic. You can control it manually or let it auto-close when the stream ends. Markdown is supported."
)

# Reasoning

A collapsible component for showing AI reasoning, explanations, or logic. You can control it manually or let it auto-close when the stream ends. Markdown is supported.

## Examples

### Basic Usage

The most basic implementation of the Reasoning component with auto-close functionality when streaming ends.

<ComponentCodePreview
  component={<ReasoningBasic />}
  filePath="app/docs/reasoning/reasoning-basic.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[300px]"
  hasReTrigger
/>

### With Markdown

Show rich formatting with markdown support for better structured reasoning content.

<ComponentCodePreview
  component={<ReasoningMarkdown />}
  filePath="app/docs/reasoning/reasoning-markdown.tsx"
  classNameComponentContainer="p-8 justify-start items-start min-h-[400px]"
  hasReTrigger
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/reasoning.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/reasoning.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### Reasoning

| Prop         | Type                    | Default | Description                                                 |
| :----------- | :---------------------- | :------ | :---------------------------------------------------------- |
| children     | React.ReactNode         |         | The content of the component                                |
| className    | string                  |         | Additional CSS classes                                      |
| open         | boolean                 |         | Control the open state (makes component controlled)         |
| onOpenChange | (open: boolean) => void |         | Callback when open state changes                            |
| isStreaming  | boolean                 |         | When false, automatically closes the reasoning (auto-close) |

### ReasoningTrigger

| Prop      | Type            | Default | Description                  |
| :-------- | :-------------- | :------ | :--------------------------- |
| children  | React.ReactNode |         | The content of the trigger   |
| className | string          |         | Additional CSS classes       |
| ...props  | HTMLAttributes  |         | Additional HTML button props |

### ReasoningContent

| Prop             | Type            | Default | Description                               |
| :--------------- | :-------------- | :------ | :---------------------------------------- |
| children         | React.ReactNode |         | The content to be displayed               |
| className        | string          |         | Additional CSS classes                    |
| contentClassName | string          |         | Additional CSS classes for the content    |
| markdown         | boolean         | false   | Enable markdown rendering for the content |
| ...props         | HTMLAttributes  |         | Additional HTML div props                 |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { CustomFileUpload } from "./custom-file-upload"

export const metadata = generateMetadata(
  "File Upload",
  "A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations."
)

# File Upload

A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.

## Examples

### File Upload with Prompt Input

You can combine the file upload component with the [Prompt Input](/docs/prompt-input) component to create a full-featured input component with file upload support. You can try to drop a file to see the visual feedback.

<ComponentCodePreview
  component={<CustomFileUpload />}
  filePath="app/docs/file-upload/custom-file-upload.tsx"
  classNameComponentContainer="p-8"
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/file-upload.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/file-upload.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### FileUpload

| Prop         | Type                    | Default | Description                              |
| :----------- | :---------------------- | :------ | :--------------------------------------- |
| onFilesAdded | (files: File[]) => void |         | Function called when files are added     |
| children     | React.ReactNode         |         | Child components                         |
| multiple     | boolean                 | true    | Allow selection of multiple files        |
| accept       | string                  |         | File types to accept (e.g., ".jpg,.png") |

### FileUploadTrigger

| Prop      | Type                                       | Default | Description                      |
| :-------- | :----------------------------------------- | :------ | :------------------------------- |
| asChild   | boolean                                    | false   | Use child element as the trigger |
| className | string                                     |         | Additional CSS classes           |
| children  | React.ReactNode                            |         | Child components                 |
| ...props  | `React.ComponentPropsWithoutRef<"button">` |         | All other button props           |

### FileUploadContent

| Prop      | Type                                   | Default | Description            |
| :-------- | :------------------------------------- | :------ | :--------------------- |
| className | string                                 |         | Additional CSS classes |
| ...props  | `React.HTMLAttributes<HTMLDivElement>` |         | All other div props    |


import ComponentCodePreview from "@/components/app/component-code-preview"
import { generateMetadata } from "../utils/metadata"
import { JSXPreviewBasic } from "./jsx-preview-basic"
import { JSXPreviewStreaming } from "./jsx-preview-streaming"

export const metadata = generateMetadata(
  "JSX Preview",
  "A component for rendering JSX strings as React components, with support for streaming content and automatic tag completion."
)

# JSX Preview

A component for rendering JSX strings as React components, with support for streaming content and automatic tag completion.

## Examples

### Basic JSX Preview

The `JSXPreview` component can render JSX strings directly into React components.

<ComponentCodePreview
  component={<JSXPreviewBasic />}
  filePath="app/docs/jsx-preview/jsx-preview-basic.tsx"
  classNameComponentContainer="p-8"
/>

### Streaming JSX Preview

The `isStreaming` prop enables real-time rendering of JSX as it's being streamed, with automatic tag completion.

<ComponentCodePreview
  component={<JSXPreviewStreaming />}
  filePath="app/docs/jsx-preview/jsx-preview-streaming.tsx"
  classNameComponentContainer="p-8"
  hasReTrigger
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

<CodeBlock
  code={`npx shadcn add "https://prompt-kit.com/c/jsx-preview.json"`}
  language="bash"
/>

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<CodeBlock filePath="components/prompt-kit/jsx-preview.tsx" language="tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Component API

### JSXPreview

| Prop        | Type             | Default | Description                                                          |
| :---------- | :--------------- | :------ | :------------------------------------------------------------------- |
| jsx         | string           |         | The JSX string to render                                             |
| isStreaming | boolean          | false   | Whether the JSX is being streamed (enables automatic tag completion) |
| className   | string           |         | Additional CSS classes                                               |
| ...props    | `JsxParserProps` |         | All other props from `react-jsx-parser`                              |


## Showcase

Check out these example implementations using prompt-kit components:

- [zola.chat](https://zola.chat/): Open-source AI chat app built with prompt-kit components

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { generateMetadata } from "../utils/metadata"

export const metadata = generateMetadata("Showcase", "Showcase for prompt-kit.")

const projects = [
  {
    title: "zola.chat",
    href: "https://zola.chat",
    thumbnail: "https://www.zola.chat/cover_zola.jpg",
  },
  {
    title: "emojis.com",
    href: "https://emojis.com",
    thumbnail: "https://attic.sh/_static/emojis/ai-emoji-generator/og.jpg",
  },
  {
    title: "ottogrid.ai",
    href: "https://ottogrid.ai",
    thumbnail: "https://ottogrid.ai/opengraph-image.png?2ca0b60807e14ef5",
  },
  {
    title: "aiagent.app",
    href: "https://aiagent.app",
    thumbnail:
      "https://aiagent.app/opengraph-image.png?opengraph-image.e8b1925a.png",
  },
  {
    title: "www.findappgaps.com",
    href: "https://www.findappgaps.com",
    thumbnail:
      "https://www.findappgaps.com/opengraph-image.png?fd2d072fb61c49f3",
  },
  {
    title: "faithbase.ai",
    href: "https://faithbase.ai",
    thumbnail: "https://faithbase.ai/opengraph.jpg",
  },
]

export default function Showcase() {
  return (
    <div className="not-prose w-full flex-auto pt-2.5">
      <div className="relative w-full pb-16">
        <h1 className="text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]">
          Showcase
        </h1>
        <p className="mt-6 text-3xl font-[450] tracking-tight text-pretty text-black">
          Building something great with prompt-kit?
        </p>
        <p className="mb-4 text-3xl font-[450] tracking-tight text-zinc-500">
          We'd love to feature your project here.
        </p>
        <Link href="https://forms.gle/SfNVyJJMyZ2RfnTb6" target="_blank">
          <Button className="mt-2">
            Submit your project <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div className="relative isolate w-full overflow-hidden rounded-2xl max-md:aspect-1200/630 md:h-48">
            <Image
              priority
              src={project.thumbnail}
              alt="thumbnail"
              unoptimized
              width={1200}
              height={630}
              className="h-full w-full object-cover"
            />

            <div
              aria-hidden
              className="absolute bottom-2 left-2 rounded-[6px] bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white"
            >
              {project.title}
            </div>

            <Link
              href={`${project.href}?utm_source=prompt-kit.com&utm_medium=referral`}
              target="_blank"
              className="absolute inset-0"
            >
              <span className="sr-only">Visit {project.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


## Blocks

Building blocks for AI apps. Clean, composable blocks built with shadcn/ui and prompt-kit. Use them to ship faster, works with any React framework.

Available blocks:

- **Prompt input with actions**: `components/blocks/prompt-input-with-actions.tsx`
- **Prompt input with suggestions**: `components/blocks/prompt-input-with-suggestions.tsx`
- **Prompt input with autocomplete**: `components/blocks/prompt-input-with-autocomplete.tsx`
- **Basic full conversation**: `components/blocks/basic-full-conversation.tsx`
- **Conversation with avatars**: `components/blocks/conversation-with-avatars.tsx`
- **Conversation with actions**: `components/blocks/conversation-with-actions.tsx`
- **Conversation with scroll to bottom**: `components/blocks/conversation-with-scroll-to-bottom.tsx`
- **Conversation with prompt input**: `components/blocks/conversation-with-prompt-input.tsx`
- **Sidebar with chat history**: `components/blocks/sidebar-with-chat-history.tsx`
- **Full chat app**: `components/blocks/full-chat-app.tsx`

All blocks are available at [prompt-kit.com/blocks](https://www.prompt-kit.com/blocks).

## Resources

- [GitHub Repository](https://github.com/ibelick/prompt-kit): Source code and issues
- [Installation Guide](https://www.prompt-kit.com/docs/installation): Detailed installation instructions
- [Component Documentation](https://www.prompt-kit.com/docs): Complete component API documentation
- [Blocks](https://www.prompt-kit.com/blocks): Building blocks for AI apps
- [shadcn/ui Documentation](https://ui.shadcn.com): Documentation for the underlying UI component system
- [Next.js Documentation](https://nextjs.org/docs): Documentation for the Next.js framework
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Documentation for the Tailwind CSS framework
