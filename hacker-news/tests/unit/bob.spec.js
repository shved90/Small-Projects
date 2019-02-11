import { shallowMount } from "@vue/test-utils";
import hackerData from "@/components/bob.vue";

it("check if hackerData props are passed correctly", () => {
  const wrapper = shallowMount(hackerData, {
    propsData: {
      items: 15,
      storyType: "beststories",
      stories: []
    }
  })
  console.log(wrapper.vm)
  expect(wrapper.find(hackerData).exists()).toBe(true)
});
