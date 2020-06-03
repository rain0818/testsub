const methods = {
  paginationAction: (type, num) => {
    let target = '';
    switch (type) {
      case 'testSchedule' :
        target = type;
        break;
      default :
        target = 'noticeWrap';
        break;
    }
    let btns = document.querySelectorAll(`.${target} .pagination .num`);
    if (btns && [...btns[num].classList].indexOf('active') === -1) {
      const activeEle = [...btns].filter(ele => [...ele.classList].indexOf('active') >= 0)[0];
      activeEle.classList.remove('active');
      btns[num].classList.add('active');
    }
  },
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.addEventListener('DOMContentLoaded', methods);