import { shallowMount } from "@vue/test-utils";
import listItem from "@/components/listItem.vue";

it("check if listItem loaded", () => {
  const wrapper = shallowMount(listItem)
  expect(wrapper.find(listItem).isVisible()).toBe(true)
  //expect(wrapper.find(listItem).exists()).toBe(true)
});
