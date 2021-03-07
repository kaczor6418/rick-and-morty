<template>
  <table>
    <thead class="header">
      <tr class="header__row">
        <th class="row__title" v-for="headerTitle in headerTitles" :key="headerTitle">
          {{ headerTitle }}
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr
        class="body_row"
        v-for="character in characters"
        :key="character.id ?? Date.now()"
      >
        <td class="row__image"><v-image :url="character.image" :description="character.name" /></td>
        <td class="row__id">{{ character.id }}</td>
        <td class="row__name">{{ character.name }}</td>
        <td class="row__gender">
          <icon-label
            :icon-props="getIconFromGender(character.gender)"
            :label-props="{ value: character.gender }"
          />
        </td>
        <td class="row__species">{{ character.species }}</td>
        <td class="row__last-episode">
          {{ getLastEpisode(character.episode).episode }}
        </td>
        <td class="row__favourite">Add to favourite</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from "vue";
import VImage from "@/components/atoms/image/VImage.vue";
import { RickAndMortyCharacter } from "@/common/interfaces/RickAndMortyCharacter";
import IconLabel from "@/components/molecules/IconLabel/IconLabel.vue";
import { Gender } from "@/common/enums/Gender";
import { IconProps } from "@/components/atoms/icon/interfaces/IconProps";
import { IconId } from "@/common/IconsDefinitions/IconId";
import { RickAndMortyEpisode } from "@/common/interfaces/RickAndMortyEpisode";
import { ARRAY_UTILS } from "@/common/Utils/ARRAY_UTILS";

export default {
  name: "TableView",
  components: { IconLabel, VImage },
  props: {
    headerTitles: {
      type: Array as PropType<string[]>,
      required: true
    },
    characters: {
      type: Array as PropType<RickAndMortyCharacter[]>,
      required: true
    }
  },
  setup() {
    const getIconFromGender = (gender: string) => {
      const iconProps: IconProps = { iconId: IconId.GENDERLESS };
      switch (gender.toUpperCase()) {
        case Gender.GENDERLESS:
          iconProps.iconId = IconId.GENDERLESS;
          break;
        case Gender.FEMALE:
          iconProps.iconId = IconId.FEMALE;
          break;
        case Gender.MALE:
          iconProps.iconId = IconId.MALE;
          break;
        case Gender.UNKNOWN:
          iconProps.iconId = IconId.UNKNOWN;
          break;
        default:
          console.log('dupa');
          break;
      }
      return iconProps;
    };
    const getLastEpisode = (episodes: RickAndMortyEpisode[]) =>
      ARRAY_UTILS.getLastElementReference(episodes);
    return { getIconFromGender, getLastEpisode };
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
  text-align: left;
}
.header {
  height: 54px;
  background: rgba(229, 234, 244, 0.25);

  .header__row {
    .row__title {
      padding: 16px 0;
    }
  }
}

.body {
  .body__row {
    padding: 8px 0;
    border-bottom: 1px solid red;
    &__image {

    }
    &__id {

    }
    &__name {

    }
    &__gender {

    }
    &__species {

    }
    &__last-episode {

    }
    &__species {

    }
  }
}
</style>
