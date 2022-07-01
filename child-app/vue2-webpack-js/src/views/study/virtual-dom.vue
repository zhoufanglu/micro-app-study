<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
    :http-request="UploadImage"
    :before-upload="beforeUpload"
    :on-change="handleChange"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
    >
      上传到服务器
    </el-button>
    <div slot="tip" class="el-upload__tip">
      只能上传jpg/png文件，且不超过500kb
    </div>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      path: "/virtual-path",
      fileList: []
    }
  },
  methods: {
    submitUpload() {
      console.log(31, this.fileList)
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    UploadImage() {
      //console.log('upload start', file)
    },
    beforeUpload(file) {
      /*console.log(57, file)
      console.log(58, this.fileList)*/
    },
    handleChange(file, fileList) {
      console.log(57, fileList)
    }
  }
}
</script>
