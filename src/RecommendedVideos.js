import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos  ()  {
  return (
    <div className='recommendedVideos'>
      <h2>Recommendation</h2>
      <div className='recommendedVideos_videos'>
        <VideoCard 
        title='Become a web developer in 10 min'
        views='2.3M views'
        timestamp='3 days ago'
        channelImage='data:image/png;base64,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'
        channel='Sonny Sangha'
        image='https://media.istockphoto.com/id/1150453750/vector/teenage-girk-working-on-computer-in-classroom.jpg?s=612x612&w=0&k=20&c=Ny8n-jcvLVf9mYX3MlMk_mRM0fW1DNuqCTrDY27B72M='
        />
        <VideoCard 
        title='Daily life of a developer'
        views='1.3M views'
        timestamp='1 days ago'
        channelImage='https://www.shutterstock.com/image-vector/happy-girl-laptop-online-coding-260nw-1982055719.jpg'
        channel='Code_guide'
        image='data:image/jpeg;base64,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'
        />
        <VideoCard
        title='10 min workout'
        views='1 M views'
        timestamp='3 days ago'
        channelImage='https://i.ytimg.com/vi/gBFvVIkPmww/maxresdefault.jpg'
        channel='Stay fit'
        image='https://i.ytimg.com/vi/gBFvVIkPmww/maxresdefault.jpg'
        />
        <VideoCard
        title='20 min workout'
        views='89k views'
        timestamp='10 days ago'
        channelImage='https://www.nourishmovelove.com/wp-content/uploads/2022/12/CoverDay4.jpg'
        channel='Gym guide'
        image='https://www.nourishmovelove.com/wp-content/uploads/2022/12/CoverDay4.jpg'
        />
        <VideoCard
        title='10 dinner ideas'
        views='90k views'
        timestamp='1 days ago'
        channelImage='https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/indian-dinner-recipes-swasthis.jpg'
        channel='Happy tummy'
        image='https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/indian-dinner-recipes-swasthis.jpg'
        />
        <VideoCard
        title='Frontend developer guide'
        views='2.3M views'
        timestamp='3 days ago'
        channelImage='https://d31ezp3r8jwmks.cloudfront.net/1so5i2frw7zf2786zn4ldg8eonue'
        channel='Clever Programmer'
        image='https://i.ytimg.com/vi/NrVf8XEihCA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJCNje3vLERI0OnkGgDYWkQdxunQ'
        />
        <VideoCard
        title='Zoom Clone'
        views='899k'
        timestamp='1 month ago'
        channelImage='https://yt3.googleusercontent.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s900-c-k-c0x00ffffff-no-rj'
        channel='Clever programmer'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00JaVqALqr31h0Xnh8mvIriEd0j7PIhaywQ&usqp=CAU'
        />
        <VideoCard
        title='Your guide'
        views='99k'
        timestamp='2 months ago'
        channelImage='https://yt3.googleusercontent.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s900-c-k-c0x00ffffff-no-rj'
        channel='Clever programmer'
        image='https://i.ytimg.com/vi/H9Ht27r7ROk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBRr3nXnDnwjq2iLVKpRIxHKinERA'
        />
        <VideoCard
        title='5 hour full phython '
        views='1M views'
        timestamp='5 days ago'
        channelImage='https://yt3.googleusercontent.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s900-c-k-c0x00ffffff-no-rj'
        channel='Clever programmer'
        image='https://i.ytimg.com/vi/Mu1I89BeKxM/maxresdefault.jpg'
        />
        <VideoCard
        title='# tips to change life'
        views='97k'
        timestamp='10 days ago'
        channelImage='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMTERcREREXERAXFxcQEREXEBAQEBARFxcYGBcSFxcaHysjGhwoHRcXJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHDEoHyExMTIxMTExMTExMTExMTExMS4xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAYFB//EADwQAAIBAgMFBgMGBQMFAAAAAAECAAMRBBIhBTFBUXEGImGBkaETMrFCUnLB0fAHFCNikjOy8RUkQ4Ki/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC8RAAIBAgQCCQUAAwAAAAAAAAABAgMRBBIhMUFREyIyYXGRobHwBRSB0eEzQsH/2gAMAwEAAhEDEQA/APkNpYEkgkHRLS7SS4BVpdpJcAq0u0kuADaFaSXBDKt4SW8JdpYEElZf3aTL+7QpIAOUcpeUcpcsQAcvhJl8IVoVoAvJ4SZfCMktAF5fCTL4RlpREEWAy+EvKOUK0q0Bg5RykyjlCtKtBJRUcpaLqNOIkkTeOogGeXIJcAuSSSASSSFBBQlyS7QSVLAl2lwCSSwJYWADaFaNRCdFBJ5AEmRqbDepHUEQBWWXljLSWgAAS7QiJLSAURKtCkkgqSXaVaAVeVeHaDlgAGUYy0q0AAy03jqIREpBqOogGaSUIUAkkkkgFiFIJJJG5BClASxBJJYEJVhgQAQsbTp8Tu4DnJTS58Jqw65mH7tOJysWQp5j1NkYLNT+JuZHA0GliLqfVW9ROixGzUDHKO61qijhlcBreV7eUvs1hbh0+9TJA/uQh/ores91MKGSmx4BqZ/9WJ/2uswTm3qejTpxjucbj+z6Nqn9NvAd09R+k5vG4V6TFHFjvB4EcxPrVbZ4y90Tme1GzM9IkDvpdl524jzH5SyjXd7SK62Hi45obnCWkyx2WCVm484Vll5YZWVaAARJaERKtABkAh2gkQASIJjCIMAEiRBqOolmRN46iAYxLkkkAuXKEsSQWIUoSxAIBGBZFWGBAKAhKJYWEBADSasA1jrMnGEjgEFr2vuG8+EonuaqeiR3vZi+dGJsuYA/hOh9iZ0iYe1JgW1WoLeNwwb3Cz5nWxaiiaqXp1Fb4eTMxLafNqdR4id72W2gMRs/vsPjq1mFgCSc2UnytMs6bWrNSqp7Ho08Yp7iG7cj3R0HGZMclwe7bnx9DxngYLZlT+ZD1sxQZviKWcByflKspGS3np46jpNnU7U/hs/xDzJBPS84nBJaM7hLV3R8t2nQ+HWdOAY2/CdR7GZiJ13bvB5FpMBozVQW8QVsvpecpaehSlmgmeZWhkm0LtKIjMsq0sKxbCDaNKyWgCpRjMsq0ACUVhkQSIANpSjUdRCIlKNR1EAwyCQQhALEgEgEK0EIgjFWCojQIJIBDUSwIQEAoCGFlqIYWAKya3vxtb6TZh8OtSynQ85nqU72O6xv1mnZ75XU+MzTujbTtJIdtrAmmqneugHAXnS/w8rIGem571swUWJJ5fSY+0te9FFA7o7zNw9Z6HY3BhwCrIqk6nOqneN1rniOEpd5RNFlGTfA6Wu11zBS4HzIQA1uYtx+s3UBT+EGRt/DwmLaa/COSi6Vqt7FAKiqNdSzm9tNd2sHBXAfMLd+1hu3AkjzvKpRynSlex4XbRb4ZrnRaqZRyJDXPofacPlnUdrdpMWfDgKaZKsWsc4Ya6G+62Wc5lm3DRahrx1MGJkpVNOGgkrJljcsorLzOJZYBWPYRZEAXaUVjAsorAFlZREYVglYAkiUBqOojSIIXUdRAPOEIShIII3CAhKJQjFgkICGspVjFWAQRgEtEhhYBAsMLCQQwIJAAggWOu4x1pkxr9/KN4Fz58JXUimi2jJqR7tLaAbDGg57wYFW5jleaNgUshuG320sDmPD6+85ujUB3z2dl18pB3zI+qrG+F27o+h4ByE1XoQBu8pg2xjfhqx3kC9vKYsLtGoRZTofEmZtti1BiTdmYLfzufpKo2lJLmdTTjeXJHNYmoWYsTqTcxMcyCQJPUPJYmURHlIDLBAoiAVjGg2gCwJTCMyyMIAkwTDIgsIABEBd46iMMAbx1EA86WBKEICCEWqxyrAQRywSWoj0WCgjkSCSKsaqwkWGqwQAEmjDYVnNlHU8B1nq7G2E9U3buqN/6Tt9k7Ip0gLAXHG08/EfUIU+rDV+huo4KUutPRepy+zuzGgapfW3d3E3+kPa/Y9XPdORl0VrXt4EcR7idniFtYgaA69ITgX8GE8eWLrOWZy1+cNj0o06ajlUdD5bX2E9E2rLbgG4N+Ftx6GbsDs2mRvF/MT6AtIMCjgHlcAgjxmb/o9K9wmXwHyk8dJesdddZHPRJbHgbOwuU2JFucbjcEtcrQz5SSSrWzLnCkgEcrA+09jEbOQAndYX+0AfeNwGAUMKgN1Gqi1tSCLn1MfdxTvF6/O4iUM0dVoz5/tbZVXDtaquh+VxqjefA+BmHLPrtWkrKVZQynQggEHqDOd2p2TpvdqJ+E33Tc0z+Ym+j9Ri9Kmj58P4YKmDa1h5HDWgMs9HH4CpRfJVXKeB3qw5g8ZiqLPSTTV1sYmmnZmZkgkRrCDaCBBgmOYRZEABliisfBZYAlosbx1EYwgDeOogHmCGsECEsAasagi0E0U1gDUWOpiCiR1NIJLRZ0GwsFmZbjedTbcJ5mCpa87an9J0Wyhk7/AFSw5rrf3t6TyMfiX2Yv8Ap7GBwyis8t/Y6CioQXUd1d48Oc9WieI3ETDhbMqtwdb+t9IHZuuXpEE3KM1PyU2E8KLepumrq56T7otN2U8NR0lO+lpdtx4/lOs19ji1lqHaEDeCIai06WpyxWIpBlKtqDcEcwRY+xg7Ne9NTe5tYnmV7pPqDNDTBs6kEZ6f3TnT8DktbyfP5ETlqw3i7nogyjBvLvO8xxsZtqYFK9M03H4W4o3BhPmu0MO1J2puO8pseR5EeBGs+pzku3+B0XEKN39Op0+yfy8xPS+nYnJPontLbx/pkxdLNHOt17HHNFNCaURPdPLFkymEIiAwgCzKYwiILCALYxdtR1ENoI3jqIB5gjEWAI1BAGU1mqmIimJqprBIxBNFEaxaLNNFZVWllg2XUI5qiRv2cnufp/zOhw1O4y8xaePs9LBegPqSf0ns0awQqTuuAfCfNYh3eh9FSVkbNg4j+jTU71c0D4Muq+0vsibHEIfs1mNvxazDiwaNSoBuzJiqfIhT3/Yt6TRh6wpV6zj5GFNz53F/8cp85Q47tcdfVaep04XjZcT2axyKXO7jNNHVQfOedtqqDQspuahVUt9ok8PKenTGVQOIFvacxXMpn2U+JYl3iw0YJYisgMy1gRVVgN6OnVrqy+wea7TNtJsqZ/usrH8NwG9iZElfQR3HX3Qotj+/ESy27md31laloTYZMe1sL8WjUpfeUgeDfZPraa7wah0PQzrM11o7o5avoz5CYM37ZphcRVUbs7EdCbj2MxGfYxkpJSXE8GUcra5CyYBjCIJEk5FEwHMNlgMsAWTA4jqITQBvHUQDz0j0MQsekA0UzNNIzJTE10xBJoQzQDpM9OaEW9gOOnrM2K7C8f2a8H234Ht4b5wo+6h9FE9g4bOhFr6XHPynj4P/AFM3C/sNJ0uCXQT5rEOzVj347CMvxqKVAMz0yabrxZdzIeovPE2rVNNfh3uzoaV9SciGyufErk9506Uvh1bj5Kgsw5VODeYuJzXalL4wHgtJQB4kkm/kBIoWdSz2tf8Anmdwetlx+eh7ew1uqVX0CjLRQm+UWsXP9x9p4tM4nF1amJp1yaKVfhigruLU72ByDRr7z1mTbW0mXDMoYhmApqNRofmt5X9Zn7F46hhVetVqG+irSXvM++4C38BqZ6GDou0pvwS7uJhxM1nUeWp9IoE5RfeABbl4RwnHdne1v8xifhsgpUzdUAu9Qta4JPruE6+nVUkqGBYWzAEXW+644TLWp1IyvU3epEZRkursPtE4imGRlYXVgVPQxoaCW0lLYVzJgHzUw29tVfl8RSVcf5AxjbgeTD0vY+xMDC08gbd3qjvpuGZj7/neMJ0MpuruxY9wy0Cobg9CPaVV3TKK/etecZtbExhc+fbca+Jq+DZf8QF/KZMPSLuF4E6+E9TthRyYp+TZag8xY+4M1dmsCDd3XMo4ajXyn1qq5aEWuKVvLf8AB5MKOevLNsm2/PRfn2uB22p0UFAUkVGyMHyi1wMuUtzN82s5mxO6eltoM9d2CkUwcqXuRlHdFjx1+slHDjIc96fKpYlb8r/lO1UUIJbsh4eVWo3sgNl7NWq+WpVFEWJLEXCkc/CeW014hi2ijKLanUZ/E+kZV2RUGHbE5lNNWVXW/fGY2BtxF9J3Cb/3er4FdWkrXpxdlu+Z5TGBxHUQmMAHUdRLTOYVjFMBRGLBBopmaaJmSnNNIyAa0nobNS73P2VLeYE82mZ6GE424931/wCJjxr6iRvwC67Z62A1Og0H0nUbMsUBHSc9s2kQN1/Ge5sq6sVPyt7NPnK0k5HuJNRPTrJmWw3rZh1BvOJ2vUL4iqbfby/4938p2mIuFuNGXd4jiDPm3aHaqpiKpTvEuSvIdfO8swkXUm1Fa2/6RCpGmnKT0M3aRtUW+oubX3Xt+k8hQAfyGpMp8S1RizG5Pp0jadPNpew3kz36cOjgos8erPpajkuJv2ftGqiFMOq0qjaNVHerMt/lVj8o6annOx7IUzg0DYqqEaqQEoatWdr/ADt6++pnFbL2i1En4SKGJsKpXO6+K30XradZ2e7O1K1T+YrswU2Y5iTVY8gTuX9iZsRaKd3ZPfm+75+LFtLXXf2R3iiSVSFhYeUl54zsaRRFiRz1HL975fA9IRlLKstmdIGqLic5i8TlrhfETpPs+3nOL7QvlxlIfeyj/wCrRShmqW7n6FtOSSdxvbuh36NTnemfIgj6ma+zhU0WWwDakG28+MPtoiNQDM+RkcFBa+cm4yemt/CebsTEBU367rc7/sT18LVz0oLldev6sZujtmfNr2K7QVR8I01WzEjQbvmBJnnpXL0Hphsi21udDY319Jo2iczE7+JHgNwnnUsIhoktUyXFlHM2va01LgQ9meeAztf5dAjXN/EaDdHdoKCUvhrSrmqroKjr9x7kWNtDzHERT4atleoqXRbGo62YDWwJ5TznM1UYNPNp87zBiaqayWd+/T0AYxY3jqIbRYOo6iaTCZlhrFqYwQBqxyNM6RywSbKDXIE9SjSvxI9hPFp1lTvtfwA1JMj7YLLZKeX+5jf2ExYmEptKPA34ScKcW5vc67Z1SkhOapv0tmOnjcTfiNrpQXOtdKifcZhnPgrDUnwI8583zsd7H1lZZkf06MpXlJmz7/S0YnT7f7YVq4NOj/RpWsT/AOVueo3DpOZK3hKIxUmulShRjlgrGOUpVHeQlVj6GYtlAJvpoJpwGBaowVQSSbADjPoOy9lphaNwAapHefj0HhKMTi40Vzb2RbRw7m+483sdsamrZ3TM/DNqF8cvPrO2pNbSeJ2fFyxPP9Z6xNmniVqsqk3Jno9HGCyo1IZANYCNDvOVqVssCUBCEgjKQLdeRtPnv8Qaxp16dQb0CuDzIYnXzE+iNOB/ilQ/p5+QUerW/OW4S33Eb8dPMSb6OVuCv5HH4nbNWtWpmq5ZdQo+yCeIHl7z38HibDfOV/lM1MW3jXx8vHSPoY5xo6EnmND5i092dFNJQ0twM0K7g30nH5Y6bEY5QN4v1FzPIqYvgNQBl18v0mMvnb4hXLYZVHEDeT5yEy6nh0l1jJVxcm+robH2nUyNTU5UcWcD7QBvY+F5gJkJgky+MVFWSMs5ym7ydynMWu8dRCYwBvHUSTgzCMEBYckDFMYrRKmMWABjDe0WpjsQO7flELK5bl0NhwhAQAYQM4Lg0E1UKRMHCUrz3sLhAaVxqSPSZq1VQNVCi5s39kEUVDoC1tDyHhOl2q3c05TkuzjFKuvQ+s6jar92eHi4t1r+B6dOySsP7PjunrN7G7TJsNbUzH5u9KGJdpmlTGiZqZ+saDJTK2hymXeBeWDOrnFizOR/iTSvhGP91P8A3iddOa/iIP8As2tvzU7f5id0P8sfFHM3aLvyZ86pDSDW5Dz/AElLcbzBcz6WFLW7PLq17q0SEwGaQtAJmgyFkwWMhMAmAUTBvqOo+shgg6jqIIFCGDFBoStAGqYwGJDeMJWkAa4uCJnUR4aWQCbmQ1c7jK24kAx6Jbf9ISkcJ7GycMKqkEXtxmetLoo5ma8NHpZ5UZtl4pe8pWzEaHfax4eV56OCxHw2KndM9fY9mYp9kXPXU29BHumZR94DXpMNSVOe2z3PTjCcdOW3eevglUsGHMT2MWcy6eHpOUwVcrpynt4PGXOU8bTza9Np35GiErnSbNGWlaTNrCo/6Q6iLO/zMyKSYtqzTTjlMVTEaJN0ctDJStrLilPekOSOErmgzlf4kVLYVV+9VX0Csf0nUmcN/FGrpRXxdvQKPzmzAJSxEF338kzPiNKUjiWaBmlO8WXn1B4obmLzSFoBeCAiYBaUXglhzgFkyg2o6iAX8ZFYXHUfWSQdVIJJIBcuSSAXJJJAIJv2b+/eSSV1uwy2j2zRT3n98BELvkklS4/g1MH7UbS+YSSTuRxHc9hfkgnhJJMHMsY5ZckkhkhQBvlyQBk8TtH8ydD9RJJL8P20U1OweOZJJJvMgJlSSQCjJJJAJLXeJJIB/9k='
        channel='Gour Gopal '
        image='https://i.ytimg.com/vi/QVoTr7j-wxE/maxresdefault.jpg'
        />
        <VideoCard
        title='Remove ngetivity from mind'
        views='97k'
        timestamp='10 days ago'
        channelImage='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/guruspeak-a-one_one.jpg?VersionId=moz9pztYR2NqT2UCD8NgsxSFr8BiU11N'
        channel='Gour Gopal '
        image='https://i.ytimg.com/vi/n8FB0gQKRgQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5Ih9AQLiTgyYN53fowts_rROmzA'
        />
        <VideoCard
        title='Quick 5 min meditation'
        views='77k'
        timestamp='2 days ago'
        channelImage='https://yt3.googleusercontent.com/ytc/AGIKgqMs1rRpNObS346sZ_vtEFjn7gl_BpqYbXrzU_OyZQ=s900-c-k-c0x00ffffff-no-rj'
        channel='Meditation and healing'
        image='https://i.ytimg.com/vi/8Xdwr4cRTVA/maxresdefault.jpg'
        />
        <VideoCard
        title='Medition guide'
        views='97k'
        timestamp='10 days ago'
        channelImage='https://yt3.googleusercontent.com/ytc/AGIKgqMs1rRpNObS346sZ_vtEFjn7gl_BpqYbXrzU_OyZQ=s900-c-k-c0x00ffffff-no-rj'
        channel='Meditation and healing'
        image='https://i.ytimg.com/vi/YAcqmBBJXbU/maxresdefault.jpg'
        />
        <VideoCard
        title='Android development beginner roadmap'
        views='97k'
        timestamp='1 month ago'
        channelImage='https://yt3.googleusercontent.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s900-c-k-c0x00ffffff-no-rj'
        channel='Tanay Pratap'
        image='https://i.ytimg.com/vi/VkR6xAdJxyc/sddefault.jpg'
        />
        <VideoCard
        title='Java Script important questions and topics'
        views='917k'
        timestamp='9 days ago'
        channelImage='https://yt3.googleusercontent.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s900-c-k-c0x00ffffff-no-rj'
        channel='Tanay Pratap'
        image='https://i.ytimg.com/vi/tOo9c6SK_do/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAaND6WhTdJz1Hx5HlKDay1lkUoGw'
        />
       <VideoCard
        title='Cloud Computing'
        views='87k'
        timestamp='8 days ago'
        channelImage='https://yt3.googleusercontent.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s900-c-k-c0x00ffffff-no-rj'
        channel='Tanay Pratap'
        image='https://i.ytimg.com/vi/bwYT36IHWNw/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBzJvVpuBoHQ7SyKRLoE6bU9coZBg'
        />
      </div>
    </div>
  )
}

export default RecommendedVideos
