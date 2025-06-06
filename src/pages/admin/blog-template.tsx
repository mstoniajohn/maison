import React from 'react'
import { Paper, Typography } from '@mui/material'
import AdminLayout from '.'

interface CodeBlockProps {
  language: string
  children: React.ReactNode
}

const CodeBlockComponent: React.FC<CodeBlockProps> = ({
  language,
  children,
}) => {
  return (
    <Paper
      elevation={3}
      className="text-white font-mono my-8 bg-gray-800 p-4 text-sm text-gray-800"
    >
      <Typography
        variant="caption"
        component="div"
        className="mb-2 text-gray-400"
      >
        {language}
      </Typography>
      <pre
        style={{
          color: 'gray',
        }}
      >
        {children}
      </pre>
    </Paper>
  )
}

const BlogPostWithCode = () => {
  return (
    <AdminLayout>
      <div className="mx-auto my-8 max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold">
          Creating/Editing a Blog Post Template
        </h1>
        <p className="mb-4">
          Here are some examples of HTML snippets you can use in the blog posts
          on{' '}
          <a
            className="text-blue hover:text-pink"
            href="https://www.skylarking.com/admin/api/blog/"
          >
            https://www.skylarking.com/admin/api/blog/
          </a>
          :
        </p>

        {/* Example Usage */}
        <CodeBlockComponent language="HTML">
          {`<!-- H1 Heading -->
<h1 class="text-3xl font-bold mb-3 font-sans text-blue uppercase">Your Heading Here</h1>

<!-- H2 Heading -->
<h2 class="text-2xl font-bold mb-3 font-sans text-blue uppercase">Your Heading Here</h2>

<!-- H3 Heading -->
<h3 class="text-xl font-bold mb-3 font-sans text-blue uppercase">Your Heading Here</h3>
`}
        </CodeBlockComponent>
        <CodeBlockComponent language="HTML">
          {`<!-- Paragraph -->
<p class="mb-4">Your text here. Style your content using TailwindCSS classes for consistent styling with the frontend application.</p>

<!-- Paragraph with bold text -->
<p class="mb-4">Your text here and your <strong>bold text here</strong> more text.</p>

<!-- Paragraph with link -->
<p class="mb-4">Text with link <a href="https://www.example.com" class="text-blue hover:text-pink">Your link text here</a> more text.</p>
          `}
        </CodeBlockComponent>
        <CodeBlockComponent language="HTML">
          {`<!-- Image -->
<img src="https://res.cloudinary.com/dfwvu4gct/image/upload/v1702137892/skylark/Skylark_Slideshow_Desktop_1920x823_Weddding_02_etk3zz.jpg" alt="Image description" class="w-full mb-4" />
            `}
        </CodeBlockComponent>
        <CodeBlockComponent language="HTML">
          {` <!-- link -->
<p><a href="https://www.example.com" class="text-blue hover:text-pink">Your link text here</a></p>

<!-- bold underlined link -->
<p><a href="https://www.example.com" class="text-blue hover:text-pink underline bold">Your bold link text here</a></p>
          `}
        </CodeBlockComponent>
        <CodeBlockComponent language="HTML">
          {`
<!-- Unordered List -->
<ul class="list-disc list-inside mb-4 ml-3">
  <li>Your list item here</li>
  <li>Your list item here</li>
  <li>Your list item here</li>
</ul>

<!-- Ordered List -->
<ol class="list-decimal list-inside mb-4 ml-3">
  <li>Your list item here</li>
  <li>Your list item here</li>
  <li>Your list item here</li>
</ol>`}
        </CodeBlockComponent>

        <CodeBlockComponent language="HTML">
          {`<--Button-->
  <p><a href="https://www.skylarknegril.com/blog"><button class="bg-pink hover:bg-blue text-white font-bold py-2 px-4 rounded-4xl uppercase font-sans">Button</button></a></p>

  <--Centered Button-->
  <p class="text-center">
  <a href="https://www.skylarknegril.com/blog"><button class="bg-pink hover:bg-blue text-white font-bold py-2 px-4 rounded-4xl uppercase font-sans">Centered button</button></a></p>
  `}
        </CodeBlockComponent>
        <CodeBlockComponent language="HTML">
          {` <!-- Blockquote -->
<blockquote class="border-l-4 border-blue-400 pl-4 mb-4">

<p class="mb-2">Your quote here.</p>
 <cite class="block text-right">- Author</cite>
</blockquote>
            `}
        </CodeBlockComponent>

        {/* Add more code blocks as needed */}
      </div>
    </AdminLayout>
  )
}

export default BlogPostWithCode
