export const modalBuilder = {
  create: function (paramsObj) {
    if (paramsObj.id && typeof paramsObj.id === 'string') {
      const modal = document.getElementById(paramsObj.id);
      if (modal) {
        const closeModal = () => {
          modal.style.display = 'none';
        };
        modal.className = 'cm-modal';
        let wrapper = document.createElement('div'),
          backdrop = document.createElement('div');
        wrapper.className = 'cm-wrapper';
        backdrop.className = 'cm-backdrop';
        backdrop.onclick = closeModal;

        modal.appendChild(wrapper);
        modal.appendChild(backdrop);
        const container = {
          header: document.createElement('div'),
          body: document.createElement('div'),
          controls: document.createElement('div'),
        };
        const cross = document.createElement('button');
        wrapper.appendChild(cross);
        cross.className = 'cm-close';
        cross.textContent = 'X';
        cross.onclick = closeModal;

        let heading = paramsObj.content.header,
          bodyng = paramsObj.content.body;
        container.header.textContent = heading;
        container.body.textContent = bodyng;

        for (const key in container) {
          container[key].className = 'cm-container';
          wrapper.appendChild(container[key]);
          container[key].id = `cm-${key}`;
        }
        if (paramsObj.controls) {
          for (const ctrl of paramsObj.controls) {
            const btn = document.createElement('button');
            btn.className = 'cm-btn';
            if (ctrl.label) {
              btn.textContent = ctrl.label;
            }
            if (ctrl.action === 'close') {
              btn.onclick = closeModal;
            }
            container.controls.appendChild(btn);
          }
        }
      }
    }
  },
  openModal: function (modalId) {
    if (typeof modalId === 'string') {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    }
  },
};
