import styled from 'styled-components'
import {format} from 'date-fns'
import React from 'react'
import {useDrag} from 'react-dnd'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid #d0d0d5;
`

const Caption = styled.p`
  font-size: 12px;
  color: #aaaaaa;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TransactionItem = ({item}) => {
    const [{opacity}, drag] = useDrag(
        () => ({
            type: format(item.date, 'yyyy-MM'),
            item,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [item],
    )

    return (
        <Wrapper ref={drag} style={{opacity}}>
            <Caption>{format(item.date, 'MM/dd/yyyy')}</Caption>
            <TitleRow>
                <div>
                    {item.title}
                </div>
                <div>
                    -${item.value}
                </div>
            </TitleRow>
            <Caption>{item.description}</Caption>
        </Wrapper>
    )
}

export default TransactionItem
