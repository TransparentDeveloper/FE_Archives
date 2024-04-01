const Spacer = ({ w = 1, h = 1 }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: w + 'rem',
        height: h + 'rem',
      }}
    />
  )
}

export default Spacer
