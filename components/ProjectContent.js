import React from 'react'
import Image from 'next/image'

export default function ProjectContent({ content }) {
  // Simple function to process markdown content and convert it to JSX
  const processMarkdown = (markdown) => {
    if (!markdown) return null
    
    // Split content by lines
    const lines = markdown.split('\n')
    const elements = []
    let key = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line === '') {
        continue
      }
      
      if (line === '<br />') {
        elements.push(<br key={key++} />)
        continue
      }
      
      // Handle headings
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} style={{ marginTop: '3rem', marginBottom: '1rem' }}>
            {line.replace('## ', '')}
          </h2>
        )
        continue
      }
      
      if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={key++} style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            {line.replace('#### ', '')}
          </h4>
        )
        continue
      }
      
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            {line.replace('### ', '')}
          </h3>
        )
        continue
      }
      
      // Handle images
      if (line.startsWith('![') && line.includes('](')) {
        const altMatch = line.match(/!\[(.*?)\]/)
        const srcMatch = line.match(/\]\((.*?)\)/)
        
        if (altMatch && srcMatch) {
          const alt = altMatch[1]
          let src = srcMatch[1]
          
          // Convert relative paths to absolute paths
          if (src.startsWith('../')) {
            src = src.replace('../', '/')
          } else if (!src.startsWith('/')) {
            src = `/${src}`
          }
          
          elements.push(
            <Image
              key={key++}
              src={src}
              alt={alt}
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', marginBottom: '2rem' }}
            />
          )
        }
        continue
      }
      
      // Handle regular paragraphs
      if (line !== '') {
        elements.push(
          <p key={key++} style={{ marginBottom: '1rem' }}>
            {line}
          </p>
        )
      }
    }
    
    return elements
  }
  
  return (
    <div className="project-content">
      {processMarkdown(content)}
    </div>
  )
}
