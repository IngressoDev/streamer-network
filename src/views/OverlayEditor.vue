<template>
  <div id="overlay_editor">
    <v-toolbar class="mt-5" color="primary" app dense>
      <v-btn flat @click="addText">
        <v-icon>title</v-icon>Insert text
      </v-btn>
      <v-btn flat @click="addImage">
        <v-icon>image</v-icon>Insert image
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer class="mt-5 editor-sidebar" light app>
      <v-text-field
        class="pl-3 pr-3"
        label="Widget name"
        :value="cElements[selectedElementIndex].name"
        @input="bla"
      ></v-text-field>
      <v-list>
        <v-list-group prepend-icon="photo_size_select_small">
          <v-list-tile slot="activator">
            <v-list-tile-title>Position, size and style</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-container style="padding: 0;">
                <v-layout row justify-space-between>
                  <v-flex xs5>
                    <v-text-field label="Width" suffix="px"></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field label="Width" suffix="px"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row justify-space-between>
                  <v-flex xs5>
                    <v-text-field label="Top" suffix="px"></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field label="Left" suffix="px"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-subheader
                      class="pl-0"
                    >Opacity {{cElements[selectedElementIndex].props.opacity}}%</v-subheader>
                    <v-slider v-model="cElements[selectedElementIndex].props.opacity"></v-slider>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-group prepend-icon="text_fields">
          <v-list-tile slot="activator">
            <v-list-tile-title>Text settings</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-container style="padding: 0;">
                <v-layout row justify-space-between>
                  <v-flex xs5>
                    <v-select :items="['Font1', 'Font2']" label="Pick a font"></v-select>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field label="Width" suffix="px"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row justify-space-between>
                  <v-flex xs5>
                    <v-text-field label="Size" prepend-icon="text_fields"></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field label="Line height" prepend-icon="format_line_spacing"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_align_left</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_align_center</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_align_right</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_align_justify</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_bold</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_italic</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_underlined</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn depressed outline>
                      <v-icon>format_size</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row wrap justify-space-between>
                  <v-flex xs12>
                    <v-switch label="Text shadow" hide-details></v-switch>
                  </v-flex>
                  <v-flex xs12>
                    <v-switch label="Text scrolling" hide-details></v-switch>
                  </v-flex>
                  <v-flex xs5>
                    <v-select :items="['Font1', 'Font2']" label="Scroll direction"></v-select>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field label="Scrolling speed"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-group prepend-icon="layers">
          <v-list-tile slot="activator">
            <v-list-tile-title>Layers</v-list-tile-title>
          </v-list-tile>

          <Draggable v-model="zElements" @end="resort">
            <v-list-tile v-for="element in zElements" :key="element.name" @click>
              <v-list-tile-title>{{element.name}}</v-list-tile-title>
            </v-list-tile>
          </Draggable>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <component
      v-for="(element, index) in cElements"
      :is="element.class"
      :key="index"
      v-bind="element.props"
      @click.native="test(index)"
      :name="element.name"
    ></component>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import ImageComponent from '../components/Image.vue';
import TextComponent from '../components/Text.vue';

export default {
  components: {
    Draggable,
  },
  data() {
    return {
      cElements: [{ id: 0, name: 'test0', class: Image, props: { img: 'https://picsum.photos/510/300/?image=100', opacity: 100, zIndex: 0 } }],
      zElements: [{ id: 0, name: 'test0' }],
      selectedElementIndex: 0,
    };
  },
  methods: {
    addImage() {
      this.cElements.push({
        id: this.cElements.length,
        name: 'test' + this.cElements.length,
        class: ImageComponent,
        props: { img: 'https://picsum.photos/510/300/?image=200', opacity: 100, zIndex: this.cElements.length },
      });
      this.zElements.unshift({ id: this.zElements.length, name: 'test' + this.zElements.length });
    },
    addText() {
      this.cElements.push({
        id: this.cElements.length,
        name: 'test' + this.cElements.length,
        class: TextComponent,
        props: { message: 'Test', opacity: 100, zIndex: this.cElements.length },
      });
      this.zElements.unshift({ id: this.zElements.length, name: 'test' + this.zElements.length });
    },
    test(index) {
      this.selectedElementIndex = index;
    },
    resort(evt) {
      for (let i = 0; i < this.zElements.length; i++) {
        const element = this.cElements.find(e => e.name === this.zElements[i].name);

        if (element) {
          element.props.zIndex = this.zElements.length - i;
        }
      }
    },
    bla(value) {
      const cElement = this.cElements[this.selectedElementIndex];
      const zElement = this.zElements.find(e => e.id === cElement.id);

      cElement.name = value;
      zElement.name = value;
    },
  },
};
</script>

<style>
.editor-sidebar .v-list__tile {
  height: auto !important;
  min-height: 48px;
}

.editor-sidebar .v-label {
  font-size: smaller;
}

.editor-sidebar .v-text-field__suffix {
  font-size: smaller;
}

.editor-sidebar .v-select__selection--comma {
  font-size: small;
}

.editor-sidebar .v-btn {
  width: 50px;
  height: 35px;
  min-width: 50px;
}
</style>

