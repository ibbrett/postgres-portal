/*
#002244 for college navy, #69BE28 for action green, and #A5ACAF for wolf gray.
*/

const focus = 'focus:bg-palette-active focus:border-palette-ring ' // focus:outline-none focus:ring-palette-ring focus:ring
const hover = 'hover:bg-palette-hover hover:border-palette-ring ' // hover:outline-none hover:ring-palette-ring hover:ring
const active =
  'active:bg-palette-active active:border-palette-ring active:outline-none' // active:outline-none active:ring-palette-ring active:ring
const border = 'border border-slate-800 rounded' // outline-none
const text = 'text-palette-text placeholder-palette-placeholder text-sm' // 'text-slate-800'
const padding = 'px-2 py-1'

const inactive = 'bg-palette-inactive'

const formField = `${text} ${border} ${padding} ${inactive} ${focus} ${active} ${hover}` //
const linkStyle = `${border} ${text} ${padding} ${hover} ${focus}` // align-items: center
const DateTimeStyle = `${text} ${border} ${padding} ${inactive} ${focus} ${active} ${hover}`
const eventDetail = `${inactive} p-2 ml-14 font-mono ${text} ${border}`

const clickable = 'cursor-pointer'
const archived = 'peer-checked:text-slate-500' // peer-checked:line-through

const iconSampleStyle = 'cursor-pointer'
const preStyle = `${border} px-5 my-5`
const headerStyle = 'flex justify-between mb-4 items-center'
const h1Style = 'text-2xl'
const itemContainerStyle = 'flex gap-1 item-center my-2'
const itemFieldStyle = 'cursor-pointer peer'
const ulStyle = 'pl-1'
const rowStyle = 'flex justify-left'

const sectionHeader = `${rowStyle} mt-10`
const dateString = `cursor-pointer  ${archived} whitespace-pre`

const hr = 'my-10'

const formStyle = 'flex gap-2 flex-col'
const formButtonContainer = 'flex gap-1 justify-end'

const spinnerOuter = 'flex h-screen'
const spinnerInner = 'mx-auto'

export {
  formField,
  linkStyle,
  iconSampleStyle,
  preStyle,
  headerStyle,
  h1Style,
  itemContainerStyle,
  itemFieldStyle,
  ulStyle,
  rowStyle,
  DateTimeStyle,
  clickable,
  sectionHeader,
  dateString,
  eventDetail,
  hr,
  formStyle,
  formButtonContainer,
  spinnerOuter,
  spinnerInner,
}
