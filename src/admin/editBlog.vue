<template>
  <div>
    <el-main class="content-content">
      <mavon-editor
        v-model="editorContent"
        :ishljs="true"
        :codeStyle="code_style"
        ref="md"
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
      />
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
        editorContent:{},
        img_file:{}
    };
  },
  methods: {
    imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      this.img_file[pos] = $file;
      this.$http({
        url: "/api/edit/uploadimg",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        let _res = res.data;
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        this.$refs.md.$img2Url(pos, _res.url);
      });
    },
    imgDel(pos) {
      delete this.img_file[pos];
    },
  },
};
</script>

<style lang="less" scoped></style>
