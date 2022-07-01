<template>
  <div class="p-name">mvvmStudy</div>
</template>
<script>
export default {
  name: "mvvm",
  components: {},
  data() {
    return {
      path: "/mvvmStudy"
    }
  },
  created() {},
  mounted() {
    /*let counter = {
      count: 1,
      doubleCount: 2
    }
    let tempCount = 1
    Object.defineProperty(counter, 'count', {
      get() {
        console.log('触发get')
        return tempCount
      },
      set(val) {
        tempCount = val
        counter.doubleCount = tempCount * 2
        return val
      }
    })
    console.log(counter.count)
    counter.count = 1
    console.log(32, counter) // count 1, doubleCount 2
    counter.count = 2
    console.log(32, counter) // count 2, doubleCount 4*/
    //实现a===1&&a===2&&a===3
    /*window.a = 1
    let temp = window.a
    Object.defineProperty(window, "a", {
      get() {
        return temp++
      }
    })*/

    /*if (a === 1 && a === 2 && a === 3) {
      console.log("true")
    }*/
    //proxy完成
    /*let test = {
      num: 0
    }
    let p = new Proxy(test, {
      get(target, key) {
        console.log(54, target)
        return target[key]++
      }
    })
    console.log(p.num)
    console.log(p.num)
    console.log(p.num)*/
    /**********************proxy学习***********************/
    /*let counter = {count: 1, doubleCount: 2}
    const p = new Proxy(counter, {
      get: (obj, prop)=>{
        console.log(obj, prop)
        if(prop === 'count'){
          return obj.count*2
        }
      }
    })
    console.log(68, p.count)*/
    /*function observe(obj, callback) {
      const newObj = {}
      for(let key in obj){
        console.log(75, obj)
        Object.defineProperty(newObj, key, {
          configurable: true,
          enumerable: true,
          get() {
            console.log(77)
            return obj[key]
          },
          set(val){
            console.log(81)
            callback(key, obj[key])
            return val
          }
        })
      }
      return newObj
    }

    const obj = observe(
      {
        name: "子君",
        sex: "男"
      },
      (key, value) => {
        console.log(`属性[${key}]的值被修改为[${value}]`)
      }
    )

    // 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
    obj.name = "妹纸"

    // 这段代码执行后，输出 属性[sex]的值被修改为[女]
    obj.sex = "女"*/
    let personOut = { name: "nike", age: 12 }
    for (let key in personOut) {
      let val = personOut[key]
      Object.defineProperty(personOut, key, {
        enumerable: true,
        get() {
          console.log("get", val)
          return val
        },
        set(value) {
          console.log("set", value)
          return val
        }
      })
    }
    personOut.name = "a"
    personOut.age = 1
    console.log(125, personOut)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
