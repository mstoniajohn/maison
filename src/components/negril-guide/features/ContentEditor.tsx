import { EmojiHappyIcon } from '@heroicons/react/solid'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { ImageIcon, Link, Unlink } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamically import the Editor component with no SSR
const Editor = dynamic(
  () =>
    import('react-draft-wysiwyg').then((mod) => {
      // Import the CSS only on the client side
      //   import('react-draft-wysiwyg/dist/react-draft-wysiwyg.css')
      return mod.Editor
    }),
  {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
  }
)

interface ContentEditorProps {
  editorState: string | EditorState
  onEditorStateChange?: (editorState: EditorState) => void
  onChange?: (contentState: any) => void
  defaultEditorState?: EditorState
}

const ContentEditor = ({
  editorState,
  onEditorStateChange,
  defaultEditorState,
  onChange,
}: ContentEditorProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [convertedEditorState, setConvertedEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (typeof editorState === 'string') {
      try {
        const blocksFromHTML = convertFromHTML(editorState)
        const contentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        )
        setConvertedEditorState(EditorState.createWithContent(contentState))
      } catch (error) {
        console.error('Error converting HTML to EditorState:', error)
        setConvertedEditorState(EditorState.createEmpty())
      }
    } else {
      setConvertedEditorState(editorState)
    }
  }, [editorState])

  if (!isMounted) {
    return <div>Loading editor...</div>
  }

  return (
    <div className="min-h-[400px]">
      <Editor
        editorState={convertedEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onChange={onChange}
        defaultEditorState={defaultEditorState}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'color',
            'link',
            'image',
            'remove',
            'history',
          ],
          link: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            dropdownClassName: undefined,
            showOpenOptionOnHover: true,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            link: { icon: Link, className: undefined },
            unlink: { icon: Unlink, className: undefined },
            linkCallback: undefined,
          },
          emoji: {
            icon: EmojiHappyIcon,
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            emojis: [
              '😀',
              '😁',
              '😂',
              '😃',
              '😉',
              '😋',
              '😎',
              '😍',
              '😗',
              '🤗',
              '🤔',
              '😣',
              '😫',
              '😴',
              '😌',
              '🤓',
              '😛',
              '😜',
              '😠',
              '😇',
              '😷',
              '😈',
              '👻',
              '😺',
              '😸',
              '😹',
              '😻',
              '😼',
              '😽',
              '🙀',
              '🙈',
              '🙉',
              '🙊',
              '👼',
              '👮',
              '🕵',
              '💂',
              '👳',
              '🎅',
              '👸',
              '👰',
              '👲',
              '🙍',
              '🙇',
              '🚶',
              '🏃',
              '💃',
              '⛷',
              '🏂',
              '🏌',
              '🏄',
              '🚣',
              '🏊',
              '⛹',
              '🏋',
              '🚴',
              '👫',
              '💪',
              '👈',
              '👉',
              '👆',
              '🖕',
              '👇',
              '🖖',
              '🤘',
              '🖐',
              '👌',
              '👍',
              '👎',
              '✊',
              '👊',
              '👏',
              '🙌',
              '🙏',
              '🐵',
              '🐶',
              '🐇',
              '🐥',
              '🐸',
              '🐌',
              '🐛',
              '🐜',
              '🐝',
              '🍉',
              '🍄',
              '🍔',
              '🍤',
              '🍨',
              '🍪',
              '🎂',
              '🍰',
              '🍾',
              '🍷',
              '🍸',
              '🍺',
              '🌍',
              '🚑',
              '⏰',
              '🌙',
              '🌝',
              '🌞',
              '⭐',
              '🌟',
              '🌠',
              '🌨',
              '🌩',
              '⛄',
              '🔥',
              '🎄',
              '🎈',
              '🎉',
              '🎊',
              '🎁',
              '🎗',
              '🏀',
              '🏈',
              '🎲',
              '🔇',
              '🔈',
              '📣',
              '🔔',
              '🎵',
              '🎷',
              '💰',
              '🖊',
              '📅',
              '✅',
              '❎',
              '💯',
            ],
          },
          image: {
            icon: ImageIcon,
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: undefined,
            previewImage: false,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
        }}
      />
    </div>
  )
}

export default ContentEditor
