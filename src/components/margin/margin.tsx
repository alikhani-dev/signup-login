import styled from 'styled-components'

const Margin = styled.span.attrs(() => ({
	height: 10
}))`
	display: flex;
	height: ${({ height }) => height}px;
`

export default Margin
