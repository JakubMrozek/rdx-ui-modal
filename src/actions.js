
export function openModal(name) {
  return () => ({
    type: 'OPEN_MODAL',
    payload: {
      name
    }
  })
}

export function closeModal(name) {
  return () => ({
    type: 'CLOSE_MODAL',
    payload: {
      name
    }
  })
}
