<!-- 商家销售统计的横向柱状图 -->

<template>
    <div class="com-container">
        <div class="com-chart" ref="seller_ref" style="width:1000px;height:600px"></div>
    </div>
</template>

<script>

export default {
    name:"seller",
    data() {
        return {
            chartInstance:null,
            allData:null, // 服务器返回的数据
            currentPage:1, // 当前显示的页数
            totalPage:0, // 一共有多少页
            timerId:null
        }
    },
    methods: {

        // 1. 初始化echartInstance
        initChart(){
            this.chartInstance  = this.$echarts.init(this.$refs.seller_ref,"chalk")
            this.getData()
            this.chartInstance.on("mouseover",()=>{
                clearInterval(this.timerId)
            }),
            this.chartInstance.on("mouseout",()=>{
                this.startInterval()
            })
        },

        // 2. 获取服务器数据
        async getData(){
           const {data:res} = await this.$http.get("http://127.0.0.1:8888/api/seller")
           this.allData = res

           // 得到数据就可以得到页面总数量
            this.totalPage = Math.ceil(this.allData.length/5)

           this.allData.sort((a,b)=>{
                return a.value - b.value
           })
           console.log(this.allData)
           this.updateChart()
           this.startInterval()
        },

        // 3. 更新图表
        updateChart(){
            let start = (this.currentPage - 1)*5
            let end = this.currentPage * 5
            const showData = this.allData.slice(start,end)

            const sellerName = showData.map((item)=>{
                return item.name
            })
            const sellerValue = showData.map((item)=>{
                return item.value
            })

            // console.log(sellerName,sellerValue)
            
            const option = {
                title:{
                    text:"商家销售统计",
                    textStyle:{
                        fontSize:35
                    }
                },
                grid:{
                    containLable:true,
                    left:"10%"
                },
                xAxis:{
                    type:"value"
                },
                yAxis:{
                    type:"category",
                    data:sellerName
                },
                series:[
                    {
                        type:"bar",
                        data:sellerValue,
                        barWidth:40,
                        showBackground: true,
                        label:{
                            show:true,
                            position:"right",
                            textStyle:{
                                color:"white"
                            }
                        },
                        itemStyle:{
                            borderRadius:5
                        }
                    }
                ],
            }
            this.chartInstance.setOption(option)
        },
        startInterval(){
            this.timerId = setInterval(()=>{
                this.currentPage++
                if(this.currentPage > this.totalPage){
                    this.currentPage = 1
                }
                this.updateChart()
            },1000)
        }
    },
    mounted(){
        this.initChart()
    },
    destroyed(){
        clearInterval(this.timerId)
    }
}
</script>

<style>
    canvas{
        border-radius: 3%;
    }
</style>