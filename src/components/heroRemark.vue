<template>
    <div class="heroAwaken hero-match">
        <div class="heroAwaken-info">
            <h1>式神点评</h1>
            <div class="heroSkill">{{ remark }}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'heroRemark',
        props: {
            remark: {
                type: String
            }
        }
    };
</script>