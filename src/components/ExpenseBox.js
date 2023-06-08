import {useDrop} from 'react-dnd'
import styled, {css} from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;

  ${({$canDrop}) => !!$canDrop && css`
    background-color: #a3afbb;
  `}

  ${({$isActive}) => !!$isActive && css`
    background-color: #4d9bea;
  `}
`

const ExpenseBox = ({children, month, onDrop}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: month,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = isOver && canDrop

    return (
        <Container ref={drop} $canDrop={canDrop} $isActive={isActive}>
            {children}
        </Container>
    )
}

export default ExpenseBox
