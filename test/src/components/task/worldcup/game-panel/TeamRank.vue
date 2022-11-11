<template>
    <div class="team-rank">
        <div class="real-size">
            <table>
                <thead>
                    <tr>
                        <th class="team-group">A组</th>
                        <th class="game-team">球队</th>
                        <th class="team-result">胜/负/平</th>
                        <th class="gains-losses">进/失</th>
                        <th class="team-score">积分</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in list" :key="index">
                        <td>
                            <img class="team-img" :src="item.img">
                        </td>
                        <td class="over-hidden">{{item.name}}</td>
                        <td>{{item.shengfu}}</td>
                        <td>{{item.jinshi}}</td>
                        <td>{{item.score}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang='ts' setup>
interface MsgType {
    img: string;
    name: string;
    shengfu: string;
    jinshi: string;
    score: number;
}
interface TeamRank {
    list: MsgType[];
}
const props = defineProps<TeamRank>();

</script>
<style lang='scss' scoped>
.over-hidden {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.team-rank {
    width: 1036px;
    height: 594px;
    background-image: url(/assets/images/world-cup/rankbox.png);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .real-size {
        width: 802px;
        height: 370px;
        transform: translate(-14px, 20px);

        table {
            width: inherit;

            thead>tr>th {
                color: #ffffff;
                font-size: 22px;
                text-shadow: 1px -1px 5px #e4ab0e, -1px 1px 5px #e4ab0e, -1px -1px 5px #e4ab0e, 1px 1px 5px #e4ab0e;
                transform: translateY(-10px);
            }

            tbody>tr>td {
                height: 75px;
                text-align: center;
                font-size: 22px;
                color: #042176;
                font-weight: 600;

                &:first-child {
                    text-align: end;
                }

                .team-img {
                    width: 60px;
                    height: 40px;
                }
            }

            thead>tr {
                height: 54px;

                .team-group {
                    text-align: start;
                    font-size: 32px;
                    width: 15%;
                }

                .game-team,
                .team-result {
                    width: 25%;
                }

                .gains-losses {
                    width: 23%;
                }

                .team-score {
                    width: 12%;
                }

            }
        }
    }
}
</style>