<template>
    <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndendNum.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndendNum.start > 2">···</button>

    <button v-for="(page,index) in startNumAndendNum.end" :key="index" v-if="page>=startNumAndendNum.start" 
      @click="$emit('getPageNo',page)" :class="{active:pageNo==page}">{{page}}</button>

    <button v-if="startNumAndendNum.end<todoPage-1">···</button>
    <button v-if="startNumAndendNum.end<todoPage" @click="$emit('getPageNo',todoPage)" :class="{active:pageNo==todoPage}">{{todoPage}}</button>
    <button :disabled="pageNo==todoPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    props:['pageNo','pageSize','total','continues'],
    name: "Pagination",
    computed:{
        todoPage(){
            return Math.ceil(this.total/this.pageSize)
        },
        startNumAndendNum(){
            const {continues,todoPage,pageNo} = this
            //先定义页码数字5【就是至少5页】，如果不正常的现象【就是不够5页】
            let start = 0,end = 0;
            //不正常现象【总页数没有连续页码多】
            if(continues>todoPage){
                start = 1;
                end = todoPage
            }else{
                //正常现象【连续页码5，但是你的总页数一定是大于5的】
                //起始数字
                start = pageNo-parseInt(continues/2)
                end = pageNo+parseInt(continues/2) 
                //把出现不正常的现象【start数字出现0|负数】纠正
                if(start<1){
                    start =1;
                    end = continues;
                }
                //把出现不正常的现象【ebd数字大于总页码】纠正
                if(end>todoPage){
                    end = todoPage;
                    start = todoPage-continues+1
                }
            }
            return {start,end}
        }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  .active{
    background-color: #409eff;
  }
</style>
