import './index.css'

const TabItems = props => {
  const {tab, onClickTab} = props
  const {tabId, displayText} = tab

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" className="tabBtn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
