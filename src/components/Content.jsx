const Content = ({text,mode}) => {
  return (
    <p className={`text-sm animation-above ${mode === 'theme-light' ? 'text-[#555]' : 'text-[#AAAAAA]'}`}>{text}</p>
  )
}

export default Content