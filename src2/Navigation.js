import * as ContainerRegistry from './containers/ContainerRegistry';

export function registerContainer(containerKey, getContainerFunc) {
  ContainerRegistry.registerContainer(containerKey, getContainerFunc);
}

export function startApp(params) {
  //
}

export function push(params) {
  //
}

export function pop(params) {
  //
}

export function showModal(params) {
  //
}

export function dismissModal(params) {
  //
}

export function dismissAllModals(params) {
  //
}

export function showLightbox(params) {
  //
}

export function dismissLightbox(params) {
  //
}

export function showInAppNotification(params) {
  //
}

export function dismissInAppNotification(params) {
  //
}

export function popToRoot(params) {
  //
}

export function newStack(params) {
  //
}
