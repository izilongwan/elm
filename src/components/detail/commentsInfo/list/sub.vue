<template>
  <li class="item">
    <!-- 用户头像 -->
    <div class="img-wrap">
      <img
        :src="item.avatar || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIOEhUPDxMQFRIWEBYVEhAWFhgTEBcQFxUWFxcVFRMYHSggGBolGxUTITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0NFw4PFysZFR8rNysrLSs4OCstKy0tKy0tNys3NzgtNysrKy0rNzc3KysrKysrKysrKystKysrLSsrK//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAACAQYHCAX/xAA/EAABAgMFBwMBBAgFBQAAAAABAAIDBBETITFRYQUSFDJBcYEGByKRI3KhsUJSYqKywdHwFTNDgpJTY6Oz0v/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAcEQEBAAIDAQEAAAAAAAAAAAAAAQIREiFRMUH/2gAMAwEAAhEDEQA/AO4qKKIEouJ7qqtFxPdVQNS/L5RUKX5fKKgXmuiAjzXRAQFlsfCaSstj4TSAcflKUTcflKUQZbiO6eSLcR3TyCJF+J7p5IuxPdBhNwOUJRNwOUICJaax8JlLTWPhAFHleqAjyvVAwhTGCKhTGCBVWh4juqq0PEd0DqiiiBK0OZUtDmVVRA2xgIBIGCtZjIKQsB2VkCsY0NBcFS0OZVpjm8IaBiB8q1v7otmMghSvVHQBjjdFRdf0QLQ5lHmsPP8AVLICQnEkAmoyTNmMglYHME4go5gpgEraHMpx+B7JFBa0OZTTWDIJNPNwHZBizGQS0VxBIFwyTaTj8x/vogxaHMo0Abwqb7+qXTMrh5QEsxkEKP8AGlLuyOgTXRAG0OZV4JqaG8ZISJL4oGbMZBVewAEgDBEVYuB7IFLQ5lS0OZVVEDVg3VSwbqiqIFXRSLhgFi3doqxcT3VUDDGB4qcVawbqpL8vlFQLxPhy9VS3dorzXRAQGhu37nd0SwbqhS2PhNIAvhhoqMQhW7tEePylfD2ztyXkWWkzFYwdAT8j91ovKD6wjE3Itg3Vch2t7xNaaScuX/8Aciu3B3ENtSR3IXwJj3d2k81aZdgybDqPq4lVxo77YN1QjGIuXBoHu3tNpq50B+hhAD90hfd2V7x1NJuWoP8AqQXV/wDG/wD+k40dbt3aIrIYcKnEr4GwvUcrPt3paK12bOWIO7DeFsMDlCkYsG6qkR25c3umEtNY+EFbd2ivD+fN0QEeV6oL2DdVV7AwVGKOhTGCANu7RZbFJuOBQlaHiO6BiwbqpYN1RVEC/E6KcTogKIGLHevrjepw2qLCwHZWQLl+58cVOJ0VJjm8IaA4FppRZ4bVSV6o6Bcts78eixxOivNYef5FaT7jeqxsyXpDI4iLVsIZD9KIRpUeSECvuH7jNkQ6Wlg18zS84shauHV37P1XEJqbjzcXeiuiRoz3UBNXPc44BrR+QCts2QjTsdsGC10SNEee5cTVz3OPTEknVeh/Q/oaBspgcAHzBHzjkX34tZXlb+a6dYjl2wPaWcmAHzJbLtpXdd8otPui5vkrapX2ikmj7WLMvOYLWD6bpXUXYHsklPKjnsz7RyLh9nEmWHMua8fTdC1nb3tBNQQXyr2RxjuH4RaaVNCfIXaE63Adk5UeTAY0pFP+bBjQ3X4siNdr1C7H7d+5nE7spOloj8rI1zWxT0DgLmv7XFbf6w9Hy+1Ye7FaGxQPs44H2jTkf1m6FedNv7GjbPjulphu69huI5XN/Rew9QRfmMMVXWQ9TcTooG2l+HRc+9rvV3HwjLx3VmITRUnGJCwD9SDQHuM10OVw8rnZoY4bVYIs9aphAmuiDHE6KB+/8cEBEl8UBOG1Usd2+uF6OqxcD2QB4nRTidEBRAXhzopw50TSiAIjBtxrcpxA1QIuJ7qqAzmb/wAh+Kxw50RZfl8oqBdps8euStxA1VZrogIDvfv3C6l9+FF5p9f7ZM9PRYtasabKEOghsJH4nePld99Sz3DSczHGLJZ5HelAvNWy5IzMaFAFaxIrIdevycAT9CSrx9HavZ30wJaWE/EAtIwqzNsD9Gn3sfoujcQNVVsFsOGIbAA1rQ1oGAa2gAHgICm3YZMcG69D4c6IbcR3TywK8OdES3AuvRki/E90DHEDIrSPdX0xx8o6PDH20FpiM/WcwD5s+gJGoW3JqEKtCQeWvSu2DIzUKZabmvo/Iw3XOB0ofwC9QQIwDQReHAOBGRFy8werdmiUnZiXHKyM4NGTHfJo+jgPC7z7fT5mdnSzyakQrMnWG5zD/Cry9G1cQNVVxtMOmaAjyvVQK8OdFZrNy8/gmEKYwQY4gaqGMHXCt9yWVoeI7oL8OdFOHOiaUQDtm5qWzc0oogI6GSagXLFi7JNQsB2VkAYTg0UNxVrZuaBMc3hDQHi/PlvQ7F2SLK9UdBpnua0t2ZM6wwP321/Cq4n6Ap/iUpXC3H8LqfjRegfXUmZiQmIQxdBfu/eDSR+S807HneHjwo/SHFY8/da4Ej6VV4/B6ue8OFBig2LslWUeHbrgagioPQgioP0TygKCERfRHtm5q78D2SKBu2bmgGET0Q083AdkCli7JGhvDRQ4oyTj8x/vog89+7BH+JxyP2K990Lpvs20nZjKYCNG/wDYT/MrjfrDaAmp2YjNNWujODT03W/AEd92vld69q5IwNmS7SKFzTEOf2ji/wDmF0y+DYbF2SJC+HNcmECa6LmL2zc1WI4OFBeUsiS+KDFi7JZbDINSLgm1WLgeyCts3NS2bmlFEGd05FTdORTyiCkMig7K28Mwk4uJ7qqAscVNyHunIpmW5fKKgBL3VrcjbwzCBNdEBAxNAOFMb7xpQrzH612MZCdjS5B3d7fh6wn1LT+Y/wBpXpmWx8f0Wm+63o87RgCNBbWZggloGL4eLmanqNe6rG6C3tB6iE3LNl3n7WXAYa4mFSjHeB8fC6JvDMLyjsPa8WQjNmIBLXtN4PK5tfkx46g/3eF6D9J+qYG04e/BIEQAWkEn5sOera9Uyg2pzhTEYJPdORUZiO6eUhHdORTjXCmIwVki7E90Du8MwtK9zvUQkJV+6aRooMODmKijn/7RXzRfR9SeoYGzoVtMOpjuMHO9w6NH8+i89+qPUMbaUd0xGN2EOGD8IcOtzW/zPU+KVjNgXp3ZTp2ZhSrAaveAdGC9x8NBXqSQhCEwQxcGgADC4AALn3s96OMpD46YbSPFZSG0i9kA0PguoD2A1XQprHwmV3QxvDMIMxfSl6XR5XqpAd05FEgChvTSFMYICbwzCrEcKHsk1aFiO6DG6cipunIp5RBFEjvHMqbxzKDMXE91VOQ2ig7K26MggHLcvlFSsc0NyHvHMoDTXRATEvfWt6NujIIFpXHwmShTAoLs18+en2S7DFjRGsYMXOdQfUoND9y/bbid+dkWgR73RYAo0RT1cwm4PP491xyFEjScXeaYkGMwm+9kRp6g1/JdV9Q+77WEskIZfSototQzu2Hie5p2XMtvbdj7QiW0y8OdSgo0NAGQoF0x3+sb5sD3diw6NnYQiU/1GUY892m4+Fust7tbMeKvfGhnJ0J5/gDlwaS2bGj/AOTCixNWsc4fUCi+tB9EbReKiUjU1AH5lLI12WY92dltFWxIr9GwXg/vgBabt33fc6rZKDu1/wBSKanuGC76latB9u9pPu4cj7zmtH5rZNkezMzEIM1HhQm9WsBixKZVuaO9/ZZqQc8n52NORTFjOfFivuqb3HJrQMBebhmuq+23tmWls7tFt4IdCljfQ9HRRn+z9clvXpj0PJ7NFYMPeidY0T5xD2ODfAC+1GNCVly8DVEtNY+EPeOZTEuKi/NSFkeV6o+6MggzF1KXIDoUxglt45lEgGpvQCVoWI7pzdGQVYgFD2QXUSO8cypvHMoMKJuxbkpYtyQWhYDsrJR0Qg0BuWLZ2aDMxzeENMwmhwqbyrWLckFJXqjpeL8OW5aj6+9bDZcGjSHTDwbKGaUH7bh+qPxKaDPrz1pA2XDAd847r4cAG8/tOP6LdfouB+ovUkxtF5iTMSoHLDF0Jgya3+ZvS0SJHn49TaRo8V/3nucegHQfgAu2egfbOFJBsxOhsWZuIab4UI/sg8zh+t9F06xHPPSfttNT+6+J9hBOD3gmI5ubWf1ousbA9tNnSdHWVtEH+pG+d+YZyt+ldVtb2BoqMc0G2dmpuVoYbCaxtGtDRTAAAfglEQRSbqo9i3JSFE83AdlSxbkgGKRdVA2k4/Mf76KWzs0aGwOFTigWTMsbvKtYtyXCfcv1XPQtoRIMKNGgQ4RaIbIbiwG4HfdTnrXrUXLZNjvSBNdFovtx66/xKHYxnATTG/LACI0Xb7R+YW8wvnzX5JZoARJfFHsW5KsRoaKi4rAZVi4HslbZ2ay2ISaE3FANRN2LclLFuSAiiV4g6KcQdEFIuJ7qqZEEOvNb71OHGqDMvy+UVLOfufEfiscQdECXqfa0ORgPmY3KxpNOrndGjUm5eZts7Uiz8d0xFqYj3XNF9B+ixoyGC3v3p9SmYjiRYfhBoYtOsZwqAfutI8u0U9mvSYmoxnow+zgmkIdHR6c2oaD9SMlc6mxuntZ6KGz2cRHAM1EZf1s2GnwbrmV0FLubuXjteq8QdFF7Bo/KUojNiF3xNKFX4caoF24junkEwAL70PiDogaSL8T3ROIOiIIAN96BZNwOUKvDjVUdELfiKUCBlaP7l+jm7Th78MATLGfZvw3hf9m45HpkVt3EHRWa3fvPa5bB5Tk5qNJRxEYSyNCf1xDmmha4ZYghel/R23GbRl2zMO7eFHs6tiDmb9VzD3q9KCC8bRgj4xCGxx0ESnxf5AoewXzPZz1IZWa4Rx+ymLhXBscCrf8AkKt77qu9zY7+hTGCFxB0WWv3/ifwXMBVoeI7o/DjVQwQ28VuvQGUSvEHRTiDogEoj8Nqpw2qA0LAdlZAtt26mFynE6IBzHN4SW0pxsvCiR3crIbnnwKr6BZv/LBaR7wzPD7Oe2t8WIyEOxJc4f8AFrlsHBpyYfMRXxTV0SJELqdS9zsO9SAvUPpTYzdnysKWbSrGDfOcQ3vP1JXn322kBMbSl2uFWsfauGkMbw/e3V6S4jRVn4MzWHn+qWRy60uw6qcNqoA4HME4l7Lc+WNFnidEBn4HskUxb1uoscNqgAnm4DsgcNqs29LqIDpOPzH++iLxOixZb/ywr0QATMth5VeG1UDrO7HqgV9RbJbPS0WVfSkSGWg5O/Rd4NCvLENz4EQG9sSHEvHVsRjrx4IXrLiNF5x90JEQNpR6CgiERQPvj5fVwcfKvCjvOxp4TUCFMNwiQ2u8kX/jVfRl8Vo/s1MGPs4NJvhRnw/FzwPo8Lewzc+WKmhhVi4HshcTopbb11MblgXUR+G1U4bVAwohW7dVLduqBeLie6qiuhEmowKxYO0QGl+Xytf9felhteWsN/ce2IIkJ5FWiIA5tHDIhzh5X3mPDBQ4q1u3VBzr2/8Ab1+yojpiYiQ3xXMLGth7xY1tQSS5wBJNB06Le0eIN/l6Klg7RLdjMtj4TSWht3L3dkS3bqgzH5SlEy+IHCgxKFYO0QUbiO6eSogkXotu3VAVIvxPdM27dUIwSb0Ak3A5QgWDtEVkQNFDiEBktNY+ES3bqhxG797eyAK0b1/7fv2q9seXiQ2RWt3HCJXccypIO80Egip6dVvtg7RXhjc5uq2UfC9AelRsiWMDf33viGJFeBRu+WtbRoPQBrR4WwTGClu3VVe8PFBisC6tDxHdWsHaLLYRF5wCBpRCt26qW7dUCqitZnIqWZyKBuFgOyshseAACRgrWgzCBaY5vCGixhU1F4VLM5FAaV6o6BA+Na3d0W0GYQDmsPP9UsmY53hQX39ECzORQZgcwTiUhNIIJFBmmbQZhBl+B7JFOOeKYhK2ZyKCqebgOyTszkU014zCC6Tj8x/vomrQZhLRWkkkXjNANMy2HlAszkUeAd0UN1/VAZAmuiLaDMIUf5Upf2QLokviq2ZyKvBFDU3BA0qxcD2UtBmFV7wQQCMECiitZnIqWZyKB1RRRAlFxPdVVouJ7qqBqX5fKKhS/L5RUC810QEea6ICAstj4TSVlsfCaQDj8pSibj8pSiDLcR3TyRbiO6eQRIvxPdPJF+J7oMJuByhKJuByhARLTWPhMpaax8IAo8r1QEeV6oGEKYwRUKYwQKq0PEd1VWh4jugdUUUQf//Z'"
        alt="item.avatar"
      />
    </div>
    <div class="info">
      <div class="cell">
        <h3 class="name">{{item.username}}</h3>
        <span class="time">{{item.rated_at}}</span>
      </div>
      <p class="food-name">{{item.food_ratings[0].rate_name}}</p>
      <div class="rate">
        <StarRating :rating="item.rating" />
        <em
          class="rate-txt"
          :style="{color: satisfyTxt(item.rating).color}"
        >{{satisfyTxt(item.rating).txt}}</em>
      </div>

      <!-- 商家答复 -->
      <p class="reply">{{item.reply.content}}</p>

      <!-- 晒图 -->
      <div class="img-list">
        <ul class="c-list">
          <li
            class="c-item"
            v-for="(cItem, cIdx) of item.order_images"
            :key="cIdx"
          >
            <img :src="cItem.image_hash" :alt="cItem.image_hash" />
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import StarRating from 'components/sub/starRating';

const SATISFY = [
  { txt: '较差', color: '#607D8B' },
  { txt: '吐槽', color: '#CDDC39' },
  { txt: '一般', color: '#FFC107' },
  { txt: '满意', color: '#FF9800' },
  { txt: '超赞', color: '#FF5722' }
]

export default {
  name: 'DetailCommentInfoItem',
  props: {
    item: Object
  },

  components: { StarRating },

  methods: {
    satisfyTxt (rating) {
      return SATISFY[rating - 1];
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  padding: 2rem 0;

  & + .item {
    border-top: 1px solid #eee;
  }

  .img-wrap {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .info {
    flex: 1;
    margin-left: 1rem;
    overflow: hidden;

    .cell {
      flex-row();
      justify-content: space-between;

      .time {
        color: #999;
      }
    }

    .food-name {
      ellipsis();
      margin: 1rem 0;
      color: #666;
    }

    .rate {
      margin-bottom: 1.5rem;

      .rate-txt {
        margin-left: 0.5rem;
        font-size: 1.3rem;
        color: #ccc;
      }
    }

    .reply {
      position: relative;
      padding: 1rem;
      background-color: #eee;
      border-radius: 5px;
      line-height: 1.6rem;

      &::before {
        position: absolute;
        content: '';
        top: -1rem;
        left: 2rem;
        width: 0;
        height: 0;
        border-width: 0 1rem 1rem 1rem;
        border-color: transparent transparent #eee;
        border-style: solid;
      }
    }

    .img-list {
      margin: 2rem 0;

      .c-item {
      }
    }
  }
}
</style>