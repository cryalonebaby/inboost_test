const styles = {
  //* App
  app: 'h-screen flex flex-col bg-bgGray',
  main: 'flex-1 flex',
  //* Navbar
  navBar: 'flex items-center justify-between bg-navGray p-3 shadow-sm shrink-0',
  navButtons: 'flex h-full gap-4',
  navBtn: 'flex items-center justify-center py-1 px-2 bg-btnWhite shadow-md rounded-sm cursor-pointer',
  searchWrapper: 'flex items-center h-full relative',
  searchBox: 'px-12 py-1 bg-btnWhite shadow-sm rounded-sm outline-none text-btnGray placeholder:text-center',
  //* Sidebar
  sideContainer: 'w-[300px] overflow-y-scroll overflow-x-hidden border-r-[1px] border-infoGray bg-btnWhite',
  sideInnerWrap: 'flex flex-col h-full border-r-[1px] border-infoGray',
  listItem: 'flex items-center max-h-[120px] cursor-pointer hover:bg-selectedGray flex-grow bg-bgGray',
  listItemContent: 'flex flex-col w-full ml-5 py-3 pr-3 border-b-[1px] border-infoGray text-primaryBlack',
  itemTitle: 'overflow-hidden text-ellipsis whitespace-nowrap pr-8 font-bold',
  itemTextContainer: 'flex gap-2',
  itemText: 'overflow-hidden text-ellipsis whitespace-nowrap flex-grow pr-8 font-light',
  itemDate: 'flex-shrink-0 flex-grow-0 font-normal',
  selected: 'bg-selectedGray',
  emptyList: 'text-center font-bold text-primaryBlack mt-4',
  //* Workspace
  workspaceContainer: 'flex-1 flex bg-bgGray',
  workspaceContent: 'flex flex-col items-center px-4 py-2 gap-2 w-full h-full',
  workspaceDate: 'text-infoGray font-medium',
  workspaceText: 'bg-bgGray text-primaryBlack font-medium h-full w-full outline-none resize-none',
  //* Tooltip
  tooltip: 'p-1 rounded bg-white-500 absolute top-full mt-2',
  //* Modal
  modalContainer: 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-4 rounded border-primaryBlack px-[80px] py-[40px] flex flex-col items-center justify-center ',
  modalTitle: 'font-bold text-2xl mb-6 text-center',
  modalButton: 'px-3 py-1 text-xl rounded-lg w-fit font-bold border border-red border-4 text-red',
  modalClose: 'absolute top-2 right-2 cursor-pointer',
  //* Effects
  glassEffect: 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-10',
}

export default styles