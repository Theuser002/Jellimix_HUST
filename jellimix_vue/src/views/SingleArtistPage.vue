<template>
        <div class="ms_album_single_wrapper ms_artist_single">
            <div class="album_single_data">
                <div class="album_single_img">
                    <img src="../assets/images/default-singer.png" alt="artist profile pic" class="img-fluid">
                </div>
                <div class="album_single_text">
                    <h2>The Artist</h2>
                    <p class="singer_name">Singer, New York</p>
                    <div class="about_artist">
                        The Artist (Real name Wingardium Leviosa) seems to be a great person so he is loved by many people but all is just the big, shiny, flashy friendly facade he puts on. &lt;The artist&gt; is in fact a psychopath and was convited of serial m.u.r.d.e.r of 13 victims and is now waiting on death row in Volatile prison. His music is good, he is not. Here are some...<a href="#">Read More</a>
                    </div>
                    <div class="album_btn">
                        <a href="#" class="ms_btn play_btn"><span class="play_all"><img src="images/svg/play_all.svg" alt="">Play All</span><span class="pause_all"><img src="images/svg/pause_all.svg" alt="">Pause</span></a>
                        <a href="#" class="ms_btn"><span class="play_all"><img src="images/svg/add_q.svg" alt="">Add To Queue</span></a>
                    </div>
                </div>
                <div class="album_more_optn ms_more_icon">
                    <span><img src="images/svg/more.svg" alt=""></span>
                </div>
                <ul class="more_option">
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_fav"></span></span>Add To Favourites</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_queue"></span></span>Add To Queue</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Download Now</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_playlst"></span></span>Add To Playlist</a></li>
                    <li><a href="#"><span class="opt_icon"><span class="icon icon_share"></span></span>Share</a></li>
                </ul>
            </div>
            <div class="album_inner_list">
				<div class="album_list_wrapper">
					<ul class="album_list_name">
						<li>#</li>
						<li>Song Title</li>
						<li>Artist</li>
						<li class="text-center">Duration</li>
						<li class="text-center">Add To Favourites</li>
						<li class="text-center">More</li>
					</ul>
					<ul>
						<li><a href="#"><span class="play_no">01</span><span class="play_hover"></span></a></li>
						<li><a href="#">I am innocent</a></li>
						<li><a href="#">The artist</a></li>
						<li class="text-center"><a href="#">5:26</a></li>
						<li class="text-center"><a href="#"><span class="ms_icon1 ms_fav_icon"></span></a></li>
						<li class="text-center ms_more_icon"><a href="javascript:;"><span class="ms_icon1 ms_active_icon"></span></a>
							<ul class="more_option">
								<li><a href="#"><span class="opt_icon"><span class="icon icon_fav"></span></span>Add To Favourites</a></li>
								<li><a href="#"><span class="opt_icon"><span class="icon icon_queue"></span></span>Add To Queue</a></li>
								<li><a href="#"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Download Now</a></li>
								<li><a href="#"><span class="opt_icon"><span class="icon icon_playlst"></span></span>Add To Playlist</a></li>
								<li><a href="#"><span class="opt_icon"><span class="icon icon_share"></span></span>Share</a></li>
							</ul>
						</li>
					</ul>
					<ul>
                        <!-- Next song here -->
                    </ul>
                </div>
            </div>
            <div class="ms_view_more padder_bottom20">
				<a href="#" class="ms_btn"> &gt; View more &lt;</a>
			</div>
        </div>
</template>

<script>
// import axios from axios

export default {};
</script>

<style>
/* global styles */
</style>

<style scoped>
/* local styles */
@import "../css/ArtistPage.css";
</style>