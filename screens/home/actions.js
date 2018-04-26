export const DO_SOMETHING = "DO_SOMETHING";

export function doSomething(navigation) {
  return {
    type: DO_SOMETHING,
    navigation
  };
}

export function setNavigationStateFromProps(navigation, { foo }) {
  navigation.setParams({ count: foo });
}
