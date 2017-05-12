<template>
    <div class="heroAwaken hero-match">
        <div class="defenseMatch heroAwaken-info">
            <h1>御魂搭配</h1>
            <ul>
                <li>{{matchInfo}}</li>
                <li>{{matchRemark}}</li>
                <li>
                    <p><span>御魂位置：</span></p>
                    <p>{{two}}</p>
                    <p>{{four}}</p>
                    <p>{{six}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'heroYuhun',
        props: {
            matchInfo: {
                type: String
            },
            matchRemark: {
                type: String
            },
            two: {
                type: String
            },
            four: {
                type: String
            },
            six: {
                type: String
            }
        }
    };

</script>
