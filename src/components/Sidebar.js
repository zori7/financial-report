import React from 'react'
import styled from 'styled-components'
import Close from '../icons/Close'
import {format} from 'date-fns'
import TransactionItem from './TransactionItem'

const SidebarContainer = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #f5f5f5;
  transition: transform 0.3s ease;
  transform: ${({$isOpen}) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 24px;
`

const CloseButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`

const SidebarTitle = styled.h2`
  font-size: 18px;
`

const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  background-color: #eeeef0;
  padding: 16px;
  border-bottom: 1px solid #d0d0d5;
`

const Sidebar = ({item, onClose}) => {
    const isOpen = !!item

    return (
        <SidebarContainer $isOpen={isOpen}>
            {isOpen && (
                <>
                    <TitleWrapper>
                        <SidebarTitle>{item.title}</SidebarTitle>
                        <CloseButton onClick={onClose}>
                            <Close />
                        </CloseButton>
                    </TitleWrapper>

                    <Summary>
                        <div>
                            {format(item.date, 'MMM yyyy')}
                        </div>
                        <div>
                            -${item.value.toFixed(2)}
                        </div>
                    </Summary>

                    {item.transactions.map((t) => (
                        <TransactionItem key={t.id} item={t} />
                    ))}
                </>
            )}
        </SidebarContainer>
    )
}

export default Sidebar
