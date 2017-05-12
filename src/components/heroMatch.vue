<template>
    <div class="heroAwaken hero-match">
        <div class="heroMatch heroAwaken-info">
            <h1>搭配阵容</h1>
            <ul class="match">
                <li class="matchImg">
                    <img :src='heroMatchImg' />
                </li>
                <li>{{matchInfo}}</li>
                <li>{{matchRemark}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'heroMatch',
        props: {
            heroMatchImg: {
                type: String
            },
            matchInfo: {
                type: String
            },
            matchRemark: {
                type: String
            }
        }
    };

</script>