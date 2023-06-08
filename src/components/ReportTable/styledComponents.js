import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  transition: padding-right 0.3s ease;

  ${({$isSidebarOpen}) => !!$isSidebarOpen && css`
    padding-right: 272px;
  `}
`

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const TableCell = styled.div`
  padding: 8px;
  border-bottom: 1px solid #cecece;
  border-right: 1px solid #cecece;
  flex: 1 0 100px;
  text-align: right;
  overflow: hidden;

  &:first-child {
    text-align: left;
    flex: 0 0 200px;
  }
`

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  
  ${({$highlighted}) => !!$highlighted && css`
    
    ${TableCell} {
      background-color: #eeeef0;
    }
  `}
`

export const Caption = styled.p`
  font-size: 12px;
  color: #ccc;
  margin-bottom: 4px;
`

export const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0;

  svg {
    transition: transform 0.2s;

    ${({$isExpanded}) => !!$isExpanded && css`
      transform: rotate(90deg);
    `}
  }
`

export const RowInnerContent = styled.div`
  overflow: hidden;
  height: 0;
  transition: opacity 1s;
  opacity: 0;
  padding-top: 28px;

  ${({$isVisible}) => !!$isVisible && css`
    height: auto;
    opacity: 1;
  `}
`

export const RowInnerTitleContent = styled.div`
  overflow: hidden;
  height: 0;
  transition: opacity 1s;
  opacity: 0;
  padding-left: 20px;

  ${({$isVisible}) => !!$isVisible && css`
    height: auto;
    opacity: 1;
  `}
`

export const RowInnerCell = styled.div`
  padding: 4px 0;
  border-bottom: 1px solid #cecece;
  height: 40px;
  line-height: 32px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  ${({$isSum}) => !!$isSum && css`
    border-bottom: none;
  `}
  
  ${({onClick}) => !!onClick && css`
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
  `}
`
