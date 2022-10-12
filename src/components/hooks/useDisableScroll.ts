const useDisableScroll = (toggleHamburgerMenu: boolean) => {
    if (toggleHamburgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
}

export default useDisableScroll;
