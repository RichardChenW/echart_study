<!-- 商家销售统计的横向柱状图 -->

<template>
    <div class="com-container">
        <div class="com-chart" ref="seller_ref" style="width:1000px;height:1000px"></div>
    </div>
</template>

<script>
export default {
    name:"seller",
    data() {
        return {
            chartInstance:null,
            allData:null
        }
    },
    methods: {

        // 1. 初始化echartInstance
        initChart(){
            this.chartInstance  = this.$echarts.init(this.$refs.seller_ref)
            this.getData()
        },

        // 2. 获取服务器数据
        async getData(){
           const {data:res} = await this.$http.get("http://127.0.0.1:8888/api/seller")
           this.allData = res
           this.updateChart()
        },

        // 3. 更新图表
        updateChart(){
            const sellerName = this.allData.map((item)=>{
                return item.name
            })
            const sellerValue = this.allData.map((item)=>{
                return item.value
            })

            console.log(sellerName,sellerValue)
            
            const option = {
                title:{
                    text:"测试"
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
                        data:sellerValue
                    }
                ]
            }
            this.chartInstance.setOption(option)
        },
    },
    mounted(){
        this.initChart()
    }
}
</script>

<style>

</style>