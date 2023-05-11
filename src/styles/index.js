const styles = {
  //* App
  app: 'h-screen flex flex-col',
  main: 'flex-1 flex',
  //* Navbar
  navBar: 'flex items-center justify-between bg-navGray p-3 shadow-sm shrink-0',
  navButtons: 'flex h-full gap-4',
  navBtn: 'flex items-center justify-center py-1 px-2 bg-btnWhite shadow-md rounded-sm cursor-pointer',
  searchWrapper: 'flex items-center h-full relative',
  searchBox: 'px-12 py-1 bg-btnWhite shadow-sm rounded-sm outline-none text-btnGray placeholder:text-center',
  //* Sidebar
  sideContainer: 'w-[300px] h-full flex flex-col overflow-y-scroll overflow-x-hidden border-r-[1px] border-infoGray',
  listItem: 'flex items-center h-full cursor-pointer hover:bg-selectedGray border-r-[1px] border-infoGray flex-grow bg-bgGray',
  listItemContent: 'flex flex-col w-full h-full ml-5 py-3 pr-3 border-b-[1px] border-infoGray text-primaryBlack',
  itemTitle: 'overflow-hidden text-ellipsis whitespace-nowrap pr-8 font-bold',
  itemTextContainer: 'flex gap-2',
  itemText: 'overflow-hidden text-ellipsis whitespace-nowrap flex-grow pr-8 font-light',
  itemDate: 'flex-shrink-0 flex-grow-0 font-normal',
  //* Workspace
  workspaceContainer: 'flex-1 flex bg-bgGray',
  workspaceContent: 'flex flex-col items-center px-4 py-2 gap-2 w-full h-full',
  workspaceDate: 'text-infoGray font-medium',
  workspaceText: 'bg-bgGray text-primaryBlack font-medium h-full w-full outline-none resize-none',
}

export default styles