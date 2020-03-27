export default ({ store, redirect }) => {
  if (!store.getters['gacha/check']) {
    return redirect('/gacha')
  }
}
