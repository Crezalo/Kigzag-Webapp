"use strict";
exports.id = 365;
exports.ids = [365];
exports.modules = {

/***/ 7878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/green-tick.c86f07ad.gif","height":498,"width":494});

/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/website.732ccc70.png","height":1000,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEUaaOAiK9wbTeAaWuAaeOEakOIZu+IYROFMaXEZhOEZnOEaauEZreIZzOIZuuIfL951A7oalOEaieEdQt8ZiuEZn+EbS+AafeEaa+AZjeEbS+AaXOAaXeAabOAYwOIWReJSEsgoJ9pJFsxQE8mT9LcXAAAAJHRSTlN2o2GDcT2JdQB8cyWhLs3JLWBUQqrNg5bGirszk9mwQYRyttNRpQcXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVQImR3GRw7AIAwEwCWAMZ303v//x0iZ04B916cjMvw0ak0pYpBQ1hFBmAq2duEPGhtw3cZIpWaUV5zttmtweXJeVv4AaJkDNjDNX0cAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1827);
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5388);
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LiveStreamTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5751);
/* harmony import */ var _VideoMeetTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2989);
/* harmony import */ var _DiscordTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1349);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LiveStreamTab__WEBPACK_IMPORTED_MODULE_6__, _VideoMeetTab__WEBPACK_IMPORTED_MODULE_7__]);
([_LiveStreamTab__WEBPACK_IMPORTED_MODULE_6__, _VideoMeetTab__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    tab: {
        fontSize: "16px",
        fontWeight: 500
    }
});
const CommunityTab = ({ creator , onCreatorProfile  })=>{
    const classes = useStyles();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let tabs_array = [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoMeetTab__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 2),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LiveStreamTab__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 1),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DiscordTab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 3)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default()), {
                    value: value,
                    onChange: handleChange,
                    centered: true,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: "#3B82F6"
                        }
                    },
                    className: "nftTabs",
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            label: "Meet",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            label: "Stream",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                            label: "Discord",
                            className: classes.tab
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "90vw"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                    children: tabs_array[value]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunityTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ContentTab)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Tab/Tab"
var Tab_ = __webpack_require__(1827);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@material-ui/core/Tabs/Tabs"
var Tabs_ = __webpack_require__(5388);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(3266);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: ./services/auth-services.ts
var auth_services = __webpack_require__(1704);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./services/api-services/creator/video_api.ts
var video_api = __webpack_require__(5550);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./services/auth-header.ts
var auth_header = __webpack_require__(6095);
;// CONCATENATED MODULE: ./services/api-services/creator/series_api.ts


// Video Streaming Server Url
const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Series Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function updateSeriedVideoDetail(seriesid, title, description) {
    try {
        if (authHeader().Authorization) {
            const data = {
                title: title,
                description: description
            };
            const response = await axios.put(VIDEO_API_URL + "series/" + seriesid, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSeriesVideoSignedUrl(seriesid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(VIDEO_API_URL + "series/video/" + seriesid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSeriesVideoDetails(seriesid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(VIDEO_API_URL + "series/details/" + seriesid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getCreatorAllSeriesVideoDetails(creator) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(VIDEO_API_URL + "series/details/creator/" + creator, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getVideoThumbnail(seriesid) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(VIDEO_API_URL + "series/thumbnail/" + seriesid, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getVideoCaptions(seriesid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(VIDEO_API_URL + "series/captions/" + seriesid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./components/VideoCard.tsx







const VideoCard = ({ videoDetails , category  })=>{
    const username = auth_services/* default.getUsername */.Z.getUsername();
    const [videoThumb, setVideoThumb] = (0,external_react_.useState)("");
    const GetVidThumbnail = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const result = await (0,video_api/* getVideoThumbnail */.v9)(videoDetails.videoid);
                console.log(result[0].signedurl);
                console.log(result[0]["signedurl"]);
                setVideoThumb(result[0]["signedurl"]);
                console.log(videoThumb);
            }
            getData();
        }, [
            username
        ]);
    };
    const GetSeriedVidThumbnail = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const result = await getVideoThumbnail(videoDetails.videoid);
                console.log(result[0]["signedurl"]);
                setVideoThumb(result[0]["signedurl"]);
                console.log(videoThumb);
            }
            getData();
        }, [
            username
        ]);
    };
    if (category == "Videos") GetVidThumbnail();
    else GetSeriedVidThumbnail();
    function seconds2time(sec) {
        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec - hours * 3600) / 60);
        var seconds = sec - hours * 3600 - minutes * 60;
        var time = "";
        if (hours != 0) {
            time = hours + ":";
        }
        if (minutes != 0 || time !== "") {
            time += minutes < 10 && time !== "" ? "0" + minutes : String(minutes) + ":";
        }
        if (time === "") {
            time = seconds + "s";
        } else {
            time += seconds < 10 ? "0" + seconds : String(seconds);
        }
        return time;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "videoCard pointer",
        onClick: ()=>router_default().push({
                pathname: "/videoplayer",
                query: {
                    videoid: videoDetails.videoid
                }
            }),
        children: videoDetails.videoid != "" && videoDetails.videoid ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "videoCardImage",
                    children: [
                        videoThumb?.includes("https://") ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: videoThumb,
                            alt: "Loading ...",
                            width: 300,
                            height: 225,
                            className: "videoCardImage"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "bottom-right",
                            style: {
                                fontSize: "13px",
                                backgroundColor: "black",
                                padding: "1px"
                            },
                            children: seconds2time(videoDetails.duration)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        padding: "0px 5px 8px 15px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        style: {
                            fontSize: "16px"
                        },
                        children: videoDetails.title
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });
};
/* harmony default export */ const components_VideoCard = (VideoCard);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "@material-ui/core/Backdrop"
var Backdrop_ = __webpack_require__(6820);
var Backdrop_default = /*#__PURE__*/__webpack_require__.n(Backdrop_);
// EXTERNAL MODULE: external "@material-ui/core/Fade"
var Fade_ = __webpack_require__(4359);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/BasicModal.tsx







const useStylesModal = (0,styles_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            // backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "white",
            backgroundColor: "#3b82f6",
            padding: theme.spacing(2, 4, 3)
        }
    }));
const BasicModal = ({ modalButtonText , modalBody  })=>{
    const classesModal = useStylesModal();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modelButton",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    style: {
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px"
                    },
                    variant: "contained",
                    onClick: handleOpen,
                    children: modalButtonText
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                className: classesModal.modal,
                open: open,
                onClose: handleClose,
                closeAfterTransition: true,
                BackdropComponent: (Backdrop_default()),
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                    in: open,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classesModal.paper,
                        children: modalBody
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_BasicModal = (BasicModal);

;// CONCATENATED MODULE: ./public/uploading.gif
/* harmony default export */ const uploading = ({"src":"/_next/static/media/uploading.80a35203.gif","height":256,"width":256});
// EXTERNAL MODULE: ./public/green-tick.gif
var green_tick = __webpack_require__(7878);
;// CONCATENATED MODULE: ./components/UploadVideoModal.tsx








const UploadVideoModal = ()=>{
    const [videofile, setVideofile] = (0,external_react_.useState)(null);
    const [thumbfile, setThumbfile] = (0,external_react_.useState)(null);
    const [fileUploadStatus, setFileUploadStatus] = (0,external_react_.useState)("NO FILE ADDED");
    const vidplay = document.getElementById("video_player");
    const vidsrc = document.getElementById("video_source");
    const thumbImage = document.getElementById("thumb_image");
    const submitFile = async (event)=>{
        event.preventDefault();
        try {
            if ((0,auth_header/* authHeader */.z)().Authorization) {
                if (!videofile) {
                    throw new Error("Select a file first!");
                }
                const formData = new FormData();
                formData.append("video", videofile[0]);
                formData.append("thumbnail", thumbfile[0]);
                formData.append("title", event.target.title.value);
                formData.append("description", event.target.description.value);
                setFileUploadStatus("UPLOADING");
                const response = await external_axios_default().post(video_api/* VIDEO_API_URL */.mt + "upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: (0,auth_header/* authHeader */.z)().Authorization
                    }
                });
                if (response.data.isSuccessful) {
                    // handle success
                    setFileUploadStatus("COMPLETE");
                    console.log(response.data.result[0]);
                } else {
                    setFileUploadStatus("Failed To Upload Retry!");
                    console.log(response.data.errorMsg);
                }
            } else {
                setFileUploadStatus("Failed To Upload Retry!");
                console.log("User Not Logged In");
            }
        } catch (err) {
            // handle error
            setFileUploadStatus("Failed To Upload Retry!");
            console.log(err);
        }
    };
    function reloadVideo() {
        if (vidsrc && vidsrc.src != window.URL.createObjectURL(videofile[0])) {
            vidsrc.src = window.URL.createObjectURL(videofile[0]);
        }
        if (vidplay) {
            vidplay.load();
        }
    }
    function reloadThumb() {
        if (thumbImage && thumbImage.src != window.URL.createObjectURL(thumbfile[0])) {
            thumbImage.src = window.URL.createObjectURL(thumbfile[0]);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "80vh"
        },
        children: [
            fileUploadStatus === "Failed To Upload Retry!" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    color: "red"
                },
                children: fileUploadStatus
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            fileUploadStatus !== "COMPLETE" && fileUploadStatus !== "UPLOADING" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: submitFile,
                className: "form",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "form label",
                        children: "Upload Video"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "file",
                        onChange: (event)=>{
                            setVideofile(event.target.files);
                            reloadVideo();
                        },
                        required: true,
                        className: "form inputFile"
                    }),
                    videofile ? /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        id: "video_player",
                        controls: true,
                        autoPlay: true,
                        crossOrigin: "anonymous",
                        controlsList: "nodownload",
                        style: {
                            width: "28vw",
                            height: "30vh",
                            margin: "10px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            id: "video_source",
                            src: window.URL.createObjectURL(videofile[0]),
                            type: "video/mp4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "form label",
                        style: {
                            fontWeight: "100"
                        },
                        children: "Upload Thumbnail"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "file",
                        onChange: (event)=>{
                            setThumbfile(event.target.files);
                        // reloadThumb(); // not needed
                        },
                        required: true,
                        className: "form inputFile"
                    }),
                    thumbfile ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            margin: "10px",
                            width: "100%",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            id: "thumb_image",
                            src: window.URL.createObjectURL(thumbfile[0]),
                            width: "350",
                            height: "220",
                            alt: ""
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        className: "mb-4 border-b-2 form inputSingleLineText",
                        id: "title",
                        name: "title",
                        maxLength: 100,
                        autoComplete: "title",
                        style: {
                            color: "black",
                            overflow: "auto",
                            resize: "both",
                            width: "30vw",
                            height: "8vh"
                        },
                        required: true,
                        placeholder: "Title Here ..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        className: "mb-4 border-b-2 form inputSingleLineText",
                        id: "description",
                        name: "description",
                        maxLength: 5000,
                        autoComplete: "description",
                        style: {
                            color: "black",
                            resize: "both",
                            width: "30vw",
                            height: "25vh",
                            overflow: "none"
                        },
                        required: true,
                        placeholder: "Description Here ..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "outline outline-offset-0 px-2 py-2 rounded buyButton",
                        style: {
                            width: "10vw"
                        },
                        children: "Upload"
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: fileUploadStatus === "UPLOADING" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: uploading,
                        alt: "",
                        width: 200,
                        height: 200
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: green_tick/* default */.Z,
                        alt: "",
                        width: 200,
                        height: 200
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_UploadVideoModal = (UploadVideoModal);

;// CONCATENATED MODULE: ./components/ContentCardGrid.tsx










const useStyles = (0,styles_.makeStyles)((theme)=>({
        paper: {
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "20px 20px 10px 0px"
        }
    }));
const GridItem = ({ vid , category , classes  })=>{
    return(// From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_VideoCard, {
            videoDetails: vid,
            category: category
        })
    }));
};
const ContentCardGrid = ({ creator , onCreatorProfile , category  })=>{
    const classes = useStyles();
    const [videoDetails, setVideoDetails] = (0,external_react_.useState)([
        {
            title: "",
            description: "",
            creator: "",
            duration: 0,
            videoid: ""
        }
    ]);
    const GetVidDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const res = await (0,video_api/* getCreatorAllVideoDetails */.Ro)(creator);
                setVideoDetails(res);
            }
            getData();
        }, [
            creator
        ]);
    };
    GetVidDetails();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blueTextBlackBackground",
        children: [
            !onCreatorProfile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    margin: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_BasicModal, {
                        modalButtonText: "Add Video",
                        modalBody: /*#__PURE__*/ jsx_runtime_.jsx(components_UploadVideoModal, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "modelButton",
                        style: {
                            marginLeft: "20px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                            style: {
                                background: "#3B82F6",
                                color: "white",
                                marginBottom: "2px"
                            },
                            variant: "contained",
                            onClick: ()=>router_default().push({
                                    pathname: "/updateprices"
                                }),
                            children: "Update Prices"
                        })
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                container: true,
                spacing: 1,
                children: videoDetails?.map((vid)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: vid.videoid ? /*#__PURE__*/ jsx_runtime_.jsx(GridItem, {
                            vid: vid,
                            classes: classes,
                            category: category
                        }, vid.videoid) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    }))
            })
        ]
    });
};
/* harmony default export */ const components_ContentCardGrid = (ContentCardGrid);

;// CONCATENATED MODULE: ./components/ContentTab.tsx







const ContentTab_useStyles = (0,styles_.makeStyles)({
    tab: {
        fontSize: "16px",
        fontWeight: 500
    }
});
const ContentTab = ({ creator , onCreatorProfile  })=>{
    const classes = ContentTab_useStyles();
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let tabs_array = [
        /*#__PURE__*/ jsx_runtime_.jsx(components_ContentCardGrid, {
            creator: creator,
            onCreatorProfile: onCreatorProfile,
            category: "Videos"
        }, 1),
        /*#__PURE__*/ jsx_runtime_.jsx(components_ContentCardGrid, {
            creator: creator,
            onCreatorProfile: onCreatorProfile,
            category: "Series"
        }, 2)
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    value: value,
                    onChange: handleChange,
                    centered: true,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: "#3B82F6"
                        }
                    },
                    className: "nftTabs",
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Videos",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Series",
                            className: classes.tab
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "90vw"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                    children: tabs_array[value]
                })
            })
        ]
    });
};
/* harmony default export */ const components_ContentTab = (ContentTab);


/***/ }),

/***/ 1349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DiscordTab)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./services/auth-header.ts
var auth_header = __webpack_require__(6095);
;// CONCATENATED MODULE: ./services/api-services/creator/discord_api.ts


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Discord Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addCreatorDiscordData(serverid, invitelink) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                serverid: serverid,
                invitelink: invitelink
            };
            const response = await external_axios_default().post(MAIN_API_URL + "discord", data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getCreatorDiscordData(creator) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(MAIN_API_URL + "discord/" + creator, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateCreatorDiscordData(serverid, invitelink) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                serverid: serverid,
                invitelink: invitelink
            };
            const response = await external_axios_default().put(MAIN_API_URL + "discord", data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./public/DiscordServerId.png
/* harmony default export */ const DiscordServerId = ({"src":"/_next/static/media/DiscordServerId.d9e1e287.png","height":625,"width":309,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAJFBMVEUeHiE8OkIrKi8tMTknJys0OGcWGBM0SkBfTVpGSU4qQFBxUWfRT3E+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVQImRXEyREAMAgDsTWGkKP/fjPoIZ5sjiQMwU2CPcXUrERV/ghwAGmc0ii+AAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./public/DiscordInviteLink1.png
/* harmony default export */ const DiscordInviteLink1 = ({"src":"/_next/static/media/DiscordInviteLink1.eb9c4033.png","height":470,"width":180,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAD1BMVEUhIiMkJSkYGRslKUUyN2TYQjWUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVQImWNgZmZmYGFhYWBgYGJgZGSA0kwQmokBAAMHACVqua5fAAAAAElFTkSuQmCC","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/DiscordInviteLink.webp
/* harmony default export */ const DiscordInviteLink = ({"src":"/_next/static/media/DiscordInviteLink.55b61545.webp","height":450,"width":650,"blurDataURL":"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAYAAkA4JZwAAp1UjCgAAP74k3p696UE7704Rs6KLkAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./public/DiscordInviteLink3.png
/* harmony default export */ const DiscordInviteLink3 = ({"src":"/_next/static/media/DiscordInviteLink3.32b0a15e.png","height":428,"width":445,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEU2OD4tLzQ/QkkVrnGKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVQImWNgYmJiYgABCAkCjBCAKYRgwPWAtIOMAAAGcwA2IdJI3gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/DiscordInviteLink4.png
/* harmony default export */ const DiscordInviteLink4 = ({"src":"/_next/static/media/DiscordInviteLink4.60b7c869.png","height":403,"width":443,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAD1BMVEUsLjM1OD07PkNGSU9DSoggIEoJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVQImWXJMQ4AMAyDwID9/zdXbcYyncSYBHBgth+qQB6u97Y9ByAAQiw97HAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/DiscordTab.tsx












const useStylesModal = (0,core_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "scroll"
        },
        paper: {
            width: "30%",
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "black",
            // backgroundColor: "#3b82f6",
            padding: theme.spacing(2, 4, 3)
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "70px 20px 10px 0px"
        },
        edit: {
            margin: "10px",
            "&:hover": {
                color: "rgb(76, 175, 80)"
            }
        },
        error: {
            color: "red",
            fontSize: "16px",
            backgroundColor: "white",
            borderRadius: "5px"
        },
        textfield: {
            minWidth: "100%",
            "& .MuiFormLabel-root": {
                fontSize: "18px"
            }
        }
    }));
const toolTipTheme = (0,core_.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const DiscordTab = ({ creator , onCreatorProfile  })=>{
    const classesModal = useStylesModal();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
        setErrorMsg("");
    };
    const [open_upd, setOpen_upd] = (0,external_react_.useState)(false);
    const handleOpen_upd = ()=>setOpen_upd(true);
    const handleClose_upd = ()=>{
        setOpen_upd(false);
        setErrorMsg_upd("");
    };
    const [serverid, setServerId] = (0,external_react_.useState)("");
    const [invitelink, setInvitelink] = (0,external_react_.useState)("");
    const [errorMsg, setErrorMsg] = (0,external_react_.useState)("");
    const [errorMsg_upd, setErrorMsg_upd] = (0,external_react_.useState)("");
    const [discordInfo, setDiscordInfo] = (0,external_react_.useState)({
        serverid: "",
        invitelink: ""
    });
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const result = await getCreatorDiscordData(creator);
                setDiscordInfo(result[0]);
                setServerId(discordInfo.serverid);
                setInvitelink(discordInfo.invitelink);
            }
            getData();
        }, [
            creator
        ]);
    };
    GetUser();
    const AddDiscord = async ()=>{
        if (serverid != "" && invitelink != "") {
            const result = await addCreatorDiscordData(serverid, invitelink);
            setDiscordInfo(result[0]);
            handleClose();
        } else {
            setErrorMsg("Server Id and Invite Link cannot be empty");
        }
    };
    const UpdateDiscord = async ()=>{
        if (serverid != "" && invitelink != "") {
            const result = await updateCreatorDiscordData(serverid, invitelink);
            setDiscordInfo(result[0]);
            handleClose_upd();
        } else {
            console.log(serverid);
            console.log(invitelink);
            setErrorMsg_upd("Server Id and Invite Link cannot be empty");
        }
    };
    console.log(discordInfo);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blueTextBlackBackground",
        children: [
            discordInfo?.serverid && discordInfo?.invitelink ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "modelButton",
                style: {
                    marginTop: "20vh",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                },
                children: [
                    onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        style: {
                            background: "#3B82F6",
                            color: "white",
                            marginBottom: "2px",
                            height: "80%"
                        },
                        variant: "contained",
                        onClick: ()=>router_default().push({
                                pathname: "/updateprices"
                            }),
                        children: "Update Prices"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: discordInfo.invitelink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                            style: {
                                background: "#3B82F6",
                                color: "white",
                                marginBottom: "2px"
                            },
                            variant: "contained",
                            children: "Discord Server"
                        })
                    }),
                    !onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        style: {
                            marginLeft: "20px"
                        },
                        className: "pointer",
                        onClick: handleOpen_upd,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                            style: {
                                background: "#3B82F6",
                                color: "white"
                            },
                            variant: "contained",
                            children: "Edit Discord Info"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modelButton",
                    style: {
                        marginTop: "20vh"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            creator,
                            " doesn't support Discord"
                        ]
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modelButton",
                    style: {
                        marginTop: "20px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        style: {
                            background: "#3B82F6",
                            color: "white",
                            marginBottom: "2px"
                        },
                        variant: "contained",
                        onClick: handleOpen,
                        children: "Add New Discord Server"
                    })
                })
            }),
            !onCreatorProfile && !discordInfo?.serverid && !discordInfo?.invitelink ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    color: "white",
                    fontSize: "18px",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "row"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "50%",
                                    color: "white",
                                    fontSize: "18px",
                                    textAlign: "center",
                                    justifyContent: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "30px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontSize: "18px",
                                            fontWeight: "bold"
                                        },
                                        children: "GET SERVER ID"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            marginTop: "10px"
                                        },
                                        children: [
                                            "1. Open your Discord server,",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#3B82F6"
                                                },
                                                children: " RIGHT-CLICK "
                                            }),
                                            "on the server name, then select",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#3B82F6"
                                                },
                                                children: " Copy ID "
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            marginTop: "40px"
                                        },
                                        children: "GET INVITE LINK"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        children: [
                                            "1. On the same pop-up menu, select",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#3B82F6"
                                                },
                                                children: " Invite People "
                                            }),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            marginTop: "40px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: DiscordInviteLink1,
                                            alt: "",
                                            width: 200,
                                            height: 400
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            marginTop: "40px",
                                            marginBottom: "20px"
                                        },
                                        children: [
                                            "3. Select ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#3B82F6"
                                                },
                                                children: "Never"
                                            }),
                                            " from the dropdown menu as shown below."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            marginTop: "20px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: DiscordInviteLink3,
                                            alt: "",
                                            width: 400,
                                            height: 400
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "50%",
                                    marginTop: "30px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: DiscordServerId,
                                        alt: "",
                                        width: 300,
                                        height: 500
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            marginTop: "40px",
                                            marginBottom: "20px"
                                        },
                                        children: [
                                            "2. On the pop-up menu as shown below, select",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#3B82F6"
                                                },
                                                children: "Edit Invite Link"
                                            }),
                                            ". This is necessary because current link has an expiry."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: DiscordInviteLink,
                                        alt: "",
                                        width: 650,
                                        height: 450
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                style: {
                                    marginTop: "40px",
                                    marginBottom: "20px"
                                },
                                children: [
                                    "4. Select",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: "#3B82F6"
                                        },
                                        children: "Generate a New Link"
                                    }),
                                    " and Copy the link. Link looks something like this:",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: "#3B82F6"
                                        },
                                        children: "https://discord.gg/[linkid]"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    marginTop: "20px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: DiscordInviteLink4,
                                    alt: "",
                                    width: 400,
                                    height: 400
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                className: classesModal.modal,
                open: open,
                onClose: handleClose,
                closeAfterTransition: true,
                BackdropComponent: core_.Backdrop,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                    in: open,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        className: classesModal.paper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    color: "red",
                                    fontSize: "15px"
                                },
                                children: errorMsg
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontWeight: "bold"
                                        },
                                        children: "Discord Server Id"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                        className: classesModal.textfield,
                                        placeholder: "Discord Server Id here ...",
                                        type: "url",
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        variant: "outlined",
                                        onChange: (e)=>{
                                            setServerId(e.target.value);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontWeight: "bold"
                                        },
                                        children: "Discord Server Invite Link"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                        className: classesModal.textfield,
                                        placeholder: "Discord Server Invite Link here ...",
                                        type: "url",
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        variant: "outlined",
                                        onChange: (e)=>{
                                            setInvitelink(e.target.value);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    style: {
                                        background: "#3B82F6",
                                        color: "white",
                                        marginBottom: "2px"
                                    },
                                    variant: "contained",
                                    onClick: ()=>{
                                        AddDiscord();
                                    },
                                    children: "Add New Discord Server"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                "aria-labelledby": "transition-modal-title",
                "aria-describedby": "transition-modal-description",
                className: classesModal.modal,
                open: open_upd,
                onClose: handleClose_upd,
                closeAfterTransition: true,
                BackdropComponent: core_.Backdrop,
                BackdropProps: {
                    timeout: 500
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                    in: open_upd,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        className: classesModal.paper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    color: "red",
                                    fontSize: "15px"
                                },
                                children: errorMsg_upd
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontWeight: "bold"
                                        },
                                        children: "Discord Server Id"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                        className: classesModal.textfield,
                                        placeholder: "Discord Server Id here ...",
                                        type: "url",
                                        defaultValue: discordInfo?.serverid,
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        variant: "outlined",
                                        onChange: (e)=>{
                                            setServerId(e.target.value);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "#3B82F6",
                                            fontWeight: "bold"
                                        },
                                        children: "Discord Server Invite Link"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                        className: classesModal.textfield,
                                        placeholder: "Discord Server Invite Link here ...",
                                        type: "url",
                                        defaultValue: discordInfo?.invitelink,
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        variant: "outlined",
                                        onChange: (e)=>{
                                            setInvitelink(e.target.value);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    margin: "10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    style: {
                                        background: "#3B82F6",
                                        color: "white",
                                        marginBottom: "2px"
                                    },
                                    variant: "contained",
                                    onClick: ()=>{
                                        UpdateDiscord();
                                    },
                                    children: "Update Discord Server Details"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_DiscordTab = (DiscordTab);


/***/ }),

/***/ 5751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VideoChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4367);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1655);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1704);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2458);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4104);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6843);
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4775);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_LockReset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7250);
/* harmony import */ var _mui_icons_material_LockReset__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockReset__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_api_services_creator_livestream_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1334);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VideoChat__WEBPACK_IMPORTED_MODULE_2__, _services_socket__WEBPACK_IMPORTED_MODULE_3__]);
([_VideoChat__WEBPACK_IMPORTED_MODULE_2__, _services_socket__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const FlvNextPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/LiveStreamTab.tsx -> " + "@asurraa/react-ts-flv-player/dist/NextReactFlvPlayer"
        ]
    },
    ssr: false
});
const toolTipTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const LiveStream = ({ creator , onCreatorProfile  })=>{
    const username = _services_auth_services__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getUsername */ .Z.getUsername();
    var [isStreamAvailable, setIsStreamAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    var [streamKey, setStreamKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    var [viewKey, setViewKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [displayChat, setDisplayChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showStreamKey, setShowStreamKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClickShowPassword = ()=>setShowStreamKey(!showStreamKey);
    const handleMouseDownPassword = ()=>setShowStreamKey(!showStreamKey);
    const GetDetails = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            async function getData() {
                if (!onCreatorProfile) {
                    const result = await (0,_services_api_services_creator_livestream_api__WEBPACK_IMPORTED_MODULE_14__/* .addCreatorLiveStreamData */ .Gl)();
                    setStreamKey(result[0].streamkey);
                }
                const result1 = await (0,_services_api_services_creator_livestream_api__WEBPACK_IMPORTED_MODULE_14__/* .getCreatorLiveStreamData */ .Gn)(creator);
                setViewKey(result1[0].viewkey);
                setIsStreamAvailable(result1[0].isStreamAvailable);
                if (isLoading) {
                    setIsLoading(false);
                }
            }
            // getData();
            const intervalId = setInterval(()=>{
                getData();
            }, 2000);
            return ()=>clearInterval(intervalId);
        }, []);
    };
    GetDetails();
    const GetSocket = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            async function getData() {
                _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.emit */ .W.emit("BE-check-user", {
                    roomId: viewKey,
                    username
                });
                _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.emit */ .W.emit("BE-join-room", {
                    roomId: viewKey,
                    userName: username
                });
                _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.on */ .W.on("FE-user-join", (users)=>{
                    console.log("FE-user-join");
                    console.log(users);
                    // all users
                    users.forEach(({ userId , info  })=>{
                        let { userName , video , audio  } = info;
                    });
                    _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.on */ .W.on("FE-receive-call", ({ signal , from , info  })=>{
                        let { userName , video , audio  } = info;
                    });
                    _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.on */ .W.on("FE-call-accepted", ({ signal , answerId  })=>{});
                    _services_socket__WEBPACK_IMPORTED_MODULE_3__/* .socket.on */ .W.on("FE-user-leave", ({ userId , userName  })=>{});
                });
            }
            getData();
        }, []);
    };
    GetSocket();
    const RotateStreamKey = async ()=>{
        const result = await (0,_services_api_services_creator_livestream_api__WEBPACK_IMPORTED_MODULE_14__/* .updateCreatorLiveStreamData */ .Vo)();
        setStreamKey(result[0].streamkey);
    };
    // Open Chat
    const clickChat = (e)=>{
        e.stopPropagation();
        setDisplayChat(!displayChat);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center",
            textAlign: "center"
        },
        children: isStreamAvailable && viewKey != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoomContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoAndBarContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoContainer, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoBox, {
                                    className: `width-ls`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FlvNextPlayer, {
                                        url: `${process.env.NEXT_STATIC_lIVE_STREAM_API_URL + viewKey}.flv`,
                                        isMuted: false,
                                        isLive: true,
                                        showControls: true,
                                        enableStashBuffer: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bar, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Center, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatButton, {
                                        onClick: clickChat,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeIcon, {
                                                className: "fas",
                                                icon: "comments"
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoChat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        display: displayChat,
                        roomId: viewKey
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: onCreatorProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    margin: "100px",
                    color: "white"
                },
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                marginBottom: "20px"
                            },
                            children: "Checking if the stream is on !!!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default()), {
                            style: {
                                display: "flex",
                                margin: "auto"
                            }
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "Creator currently not streaming!"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "blueTextBlackBackground",
                style: {
                    margin: "20px",
                    justifyContent: "center",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "white"
                },
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                marginBottom: "20px"
                            },
                            children: "Checking if the stream is on !!!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default()), {
                            style: {
                                display: "flex",
                                margin: "auto"
                            }
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "discordInfo",
                    style: {
                        // margin: "50px",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "modelButton",
                            style: {
                                marginBottom: "20px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                style: {
                                    background: "#3B82F6",
                                    color: "white",
                                    marginBottom: "2px"
                                },
                                variant: "contained",
                                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_16___default().push({
                                        pathname: "/updateprices"
                                    }),
                                children: "Update Prices"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
                            theme: toolTipTheme,
                            children: [
                                "Use the following in OBS Studio to start streaming:",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "20px",
                                        margin: "15px",
                                        color: "#3b82f6"
                                    },
                                    children: "URL"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "20px",
                                        color: "white"
                                    },
                                    children: process.env.NEXT_STATIC_lIVE_STREAM_RTMP_URL
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: {
                                        fontSize: "20px",
                                        margin: "25px 15px 25px 15px",
                                        color: "#3b82f6"
                                    },
                                    children: [
                                        "Stream Key",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                                            title: "Do NOT share your stream key with anyone",
                                            placement: "right-start",
                                            style: {
                                                marginLeft: "10px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11___default()), {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
                                        value: streamKey,
                                        type: showStreamKey ? "text" : "password",
                                        // onChange={someChangeHandler}
                                        InputProps: {
                                            // <-- This is where the toggle button is added.
                                            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputAdornment, {
                                                position: "start",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{
                                                            RotateStreamKey();
                                                        },
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                                                            title: "Rotate Stream Key, in case it is compromised",
                                                            placement: "bottom-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LockReset__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{
                                                            navigator.clipboard.writeText(streamKey);
                                                        },
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                                                            title: "Copy",
                                                            placement: "bottom-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: handleClickShowPassword,
                                                        onMouseDown: handleMouseDownPassword,
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: showStreamKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                                                            title: "Hide",
                                                            placement: "bottom-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
                                                            title: "Show",
                                                            placement: "bottom-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                                        })
                                                    })
                                                ]
                                            }),
                                            style: {
                                                color: "white"
                                            }
                                        },
                                        disabled: true
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
const VideoContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  max-width: 100%;
  height: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  gap: 10px;
`;
const VideoBox = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover {
    > i {
      display: block;
    }
  }
`;
const Bar = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  // background-color: #4ea1d3;
  color: white;
  border-radius: 0.5rem;
`;
const Center = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const ChatButton = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;
const RoomContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  width: 100%;
  max-height: 100vh;
  flex-direction: row;
`;
const VideoAndBarContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  position: relative;
  width: 100%;
  height: 100vh;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiveStream);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1827);
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5388);
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubscriptionTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5502);
/* harmony import */ var _ContentTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2904);
/* harmony import */ var _CommunityTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8804);
/* harmony import */ var _StoreTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommunityTab__WEBPACK_IMPORTED_MODULE_8__]);
_CommunityTab__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    tab: {
        fontSize: "18px",
        fontWeight: 600
    }
});
const ProfileTabs = ({ onCreatorProfile , creator , isCreator  })=>{
    const classes = useStyles();
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const checkConnected = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            async function getData() {
                if (false) {}
            }
            getData();
        }, []);
    };
    checkConnected();
    const updateUsername = ()=>{
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            setUsername(_services_auth_services__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getUsername */ .Z.getUsername());
        }, [
            isConnected
        ]);
    };
    updateUsername();
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let tabs_array;
    if (onCreatorProfile) {
        // on creator profile
        tabs_array = [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentTab__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                creator: creator,
                onCreatorProfile: onCreatorProfile
            }, 1),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommunityTab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                creator: creator,
                onCreatorProfile: onCreatorProfile
            }, 2),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StoreTab__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                creator: creator,
                onCreatorProfile: onCreatorProfile
            }, 3)
        ];
    } else {
        // on dashboard
        if (isCreator) {
            tabs_array = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentTab__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    creator: username,
                    onCreatorProfile: false
                }, 1),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommunityTab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    creator: username,
                    onCreatorProfile: false
                }, 2),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StoreTab__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    creator: username,
                    onCreatorProfile: false
                }, 3),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubscriptionTab__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}, 4)
            ];
        } else {
            tabs_array = [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubscriptionTab__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}, 1)
            ];
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isConnected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: onCreatorProfile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default()), {
                        value: value,
                        onChange: handleChange,
                        centered: true,
                        TabIndicatorProps: {
                            style: {
                                backgroundColor: "#3B82F6"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                label: "Content",
                                className: classes.tab
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                label: "Community",
                                className: classes.tab
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                label: "Store",
                                className: classes.tab
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                        children: tabs_array[value]
                    })
                ]
            }) : // on dashboard
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: isCreator ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default()), {
                            value: value,
                            onChange: handleChange,
                            centered: true,
                            TabIndicatorProps: {
                                style: {
                                    backgroundColor: "#3B82F6"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Content",
                                    className: classes.tab
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Community",
                                    className: classes.tab
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Store",
                                    className: classes.tab
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    label: "Purchases",
                                    className: classes.tab
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                            children: tabs_array[value]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default()), {
                            value: value,
                            onChange: handleChange,
                            centered: true,
                            TabIndicatorProps: {
                                style: {
                                    backgroundColor: "#3B82F6"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_3___default()), {
                                label: "Purchases",
                                className: classes.tab
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                            children: tabs_array[value]
                        })
                    ]
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
            style: {
                display: "flex",
                margin: "auto",
                height: "80vh"
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileTabs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StoreTab)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Tab/Tab"
var Tab_ = __webpack_require__(1827);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@material-ui/core/Tabs/Tabs"
var Tabs_ = __webpack_require__(5388);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./public/coming_soon.png
var coming_soon = __webpack_require__(774);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/MerchandiseTab.tsx




const MerchandiseTab = ({ creator , onCreatorProfile  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center",
            textAlign: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: coming_soon/* default */.Z,
            alt: "",
            width: 500,
            height: 500
        })
    });
};
/* harmony default export */ const components_MerchandiseTab = (MerchandiseTab);

// EXTERNAL MODULE: ./services/auth-services.ts
var auth_services = __webpack_require__(1704);
// EXTERNAL MODULE: ./public/twitter.png
var twitter = __webpack_require__(4855);
// EXTERNAL MODULE: ./public/instagram.png
var instagram = __webpack_require__(405);
// EXTERNAL MODULE: ./public/youtube.png
var youtube = __webpack_require__(3457);
// EXTERNAL MODULE: ./services/api-services/user_api.ts
var user_api = __webpack_require__(8196);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(6902);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(3188);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./services/api-services/user/shoutout_api.ts
var shoutout_api = __webpack_require__(2461);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./services/auth-header.ts
var auth_header = __webpack_require__(6095);
;// CONCATENATED MODULE: ./services/api-services/creator/shoutout_api.ts


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Shoutout Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addCreatorShoutoutData(platform, count_per_week, price) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                platform: platform,
                count_per_week: count_per_week,
                price: price
            };
            const response = await external_axios_default().post(MAIN_API_URL + "shoutout", data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getCreatorShoutoutData(creator) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(MAIN_API_URL + "shoutout/" + creator, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateCreatorShoutoutData(platform, count_per_week, price) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                count_per_week: count_per_week,
                price: price
            };
            const response = await external_axios_default().put(MAIN_API_URL + "shoutout/" + platform.toString(), data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./components/ShoutoutTab.tsx




















const useStylesModal = (0,core_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "scroll"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "white",
            // backgroundColor: "#3b82f6",
            padding: theme.spacing(2, 4, 3)
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "70px 20px 10px 0px"
        },
        edit: {
            margin: "10px",
            "&:hover": {
                color: "rgb(76, 175, 80)"
            }
        },
        error: {
            color: "red",
            fontSize: "16px",
            backgroundColor: "white",
            borderRadius: "5px"
        },
        textfield: {
            minWidth: "50vw",
            "& .MuiFormLabel-root": {
                fontSize: "18px"
            }
        }
    }));
const toolTipTheme = (0,core_.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const ShoutoutTab = ({ creator , onCreatorProfile  })=>{
    const username = auth_services/* default.getUsername */.Z.getUsername();
    const [count, setCount] = (0,external_react_.useState)(1111);
    const [shoutoutData, setShoutoutData] = (0,external_react_.useState)([
        {
            platform: 0,
            count_per_week: 0,
            week_till_date_exhausted: 0,
            price: 0
        }
    ]);
    // const [userShoutoutData, setUserShoutoutData] = useState([
    //   {
    //     platform: 0,
    //     id: 0,
    //   },
    // ]);
    const [reqCountInsta, setReqCountInsta] = (0,external_react_.useState)(0);
    const [reqCountTwitter, setReqCountTwitter] = (0,external_react_.useState)(0);
    const [reqCountYoutube, setReqCountYoutube] = (0,external_react_.useState)(0);
    const GetDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const result = await getCreatorShoutoutData(creator);
                setShoutoutData(result);
                setCount(result.length);
            }
            getData();
        }, [
            username,
            creator
        ]);
    };
    GetDetails();
    const [user, setUser] = (0,external_react_.useState)({
        emailaddress: "",
        signuptype: 1,
        username: "",
        fname: "",
        lname: "",
        bio: "",
        iscreator: false,
        displaypicture: "",
        twitterhandle: "",
        instagram: "",
        youtube: "",
        website: ""
    });
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (username != "") {
                    const result = await (0,user_api/* getUserData */.is)(creator);
                    setUser(result[0]);
                }
            }
            getData();
        }, [
            username
        ]);
    };
    GetUser();
    const GetRequests = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (onCreatorProfile) {
                    const result = await (0,shoutout_api/* getUserShoutoutData */.rE)();
                    // setUserShoutoutData(result);
                    for(var i = 0; i < result.length; i++){
                        if (result[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
                        else if (result[i].platform == 1) setReqCountTwitter(reqCountTwitter + 1);
                        else if (result[i].platform == 2) setReqCountYoutube(reqCountYoutube + 1);
                    }
                } else {
                    const result1 = await (0,shoutout_api/* getUserShoutoutAllCreatorData */.Nn)();
                    // setUserShoutoutData(result);
                    console.log(result1);
                    for(var i = 0; i < result1.length; i++){
                        if (result1[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
                        else if (result1[i].platform == 1) setReqCountTwitter(reqCountTwitter + 1);
                        else if (result1[i].platform == 2) setReqCountYoutube(reqCountYoutube + 1);
                    }
                }
            }
            getData();
        }, [
            onCreatorProfile ? creator : username
        ]);
    };
    GetRequests();
    const addNewPlatform = async ()=>{
        const result = await addCreatorShoutoutData(addUpdatePlatform, addUpdateCPW, addUpdatePrice);
        if (typeof result !== "string") handleClose();
        else setErrorMsg(result);
    };
    const updatePlatform = async ()=>{
        const result = await updateCreatorShoutoutData(scenario, addUpdateCPW, addUpdatePrice);
        if (typeof result !== "string") handleClose();
        else setErrorMsg(result);
    };
    const platform = [
        "Instagram",
        "Youtube",
        "Twitter"
    ];
    const platformLogo = [
        instagram/* default */.Z,
        youtube/* default */.Z,
        twitter/* default */.Z
    ];
    const platformLink = [
        user.instagram,
        user.youtube,
        user.twitterhandle
    ];
    const platformUrlPrefix = [
        "https://instagram.com/",
        "",
        "https://twitter.com/"
    ];
    const classesModal = useStylesModal();
    const [scenario, setScenario] = (0,external_react_.useState)(11); // 11: Add 0: Instagram 1: Youtube 2: Twitter
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [errorMsg, setErrorMsg] = (0,external_react_.useState)("");
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
        setErrorMsg("");
    };
    const [shoutoutMsg, setShoutoutMsg] = (0,external_react_.useState)("");
    const [linkDisplay, setLinkDisplay] = (0,external_react_.useState)(0);
    const [shoutoutLink1, setShoutoutLink1] = (0,external_react_.useState)("");
    const [shoutoutLink2, setShoutoutLink2] = (0,external_react_.useState)("");
    const [shoutoutLink3, setShoutoutLink3] = (0,external_react_.useState)("");
    const [shoutoutLink4, setShoutoutLink4] = (0,external_react_.useState)("");
    const [open_req, setOpen_req] = (0,external_react_.useState)(false);
    const [errorMsg_req, setErrorMsg_req] = (0,external_react_.useState)("");
    const handleOpen_req = ()=>setOpen_req(true);
    const handleClose_req = ()=>{
        setOpen_req(false);
        setErrorMsg_req("");
        setLinkDisplay(0);
    };
    const min = 0;
    const [addUpdatePlatform, setAddUpdatePlatform] = (0,external_react_.useState)(-1);
    const [addUpdateCPW, setAddUpdateCPW] = (0,external_react_.useState)(0);
    const [addUpdatePrice, setAddUpdatePrice] = (0,external_react_.useState)(0);
    const handleChange = (event)=>{
        setAddUpdatePlatform(event.target.value);
    };
    const instagramIndex = shoutoutData[0]?.platform == 0 ? 0 : shoutoutData[1]?.platform == 0 ? 1 : shoutoutData[2]?.platform == 0 ? 2 : null;
    const youtubeIndex = shoutoutData[0]?.platform == 1 ? 0 : shoutoutData[1]?.platform == 1 ? 1 : shoutoutData[2]?.platform == 1 ? 2 : null;
    const twitterIndex = shoutoutData[0]?.platform == 2 ? 0 : shoutoutData[1]?.platform == 2 ? 1 : shoutoutData[2]?.platform == 2 ? 2 : null;
    (0,external_react_.useEffect)(()=>{
        scenario == 0 ? setAddUpdatePrice(shoutoutData[instagramIndex]?.price) : scenario == 1 ? setAddUpdatePrice(shoutoutData[youtubeIndex]?.price) : scenario == 2 ? setAddUpdatePrice(shoutoutData[twitterIndex]?.price) : setAddUpdatePrice(addUpdatePrice);
    }, [
        scenario
    ]);
    (0,external_react_.useEffect)(()=>{
        scenario == 0 ? setAddUpdateCPW(shoutoutData[instagramIndex]?.count_per_week) : scenario == 1 ? setAddUpdateCPW(shoutoutData[youtubeIndex]?.count_per_week) : scenario == 2 ? setAddUpdateCPW(shoutoutData[twitterIndex]?.count_per_week) : setAddUpdateCPW(addUpdateCPW);
    }, [
        scenario
    ]);
    // console.log("reqCountInsta");
    // console.log(reqCountInsta);
    // console.log("reqCountTwitter");
    // console.log(reqCountTwitter);
    // console.log("reqCountYoutube");
    // console.log(reqCountYoutube);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center",
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ThemeProvider, {
            theme: toolTipTheme,
            children: [
                count < 3 && !onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    style: {
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px"
                    },
                    variant: "contained",
                    onClick: ()=>{
                        setScenario(11);
                        handleOpen();
                    },
                    children: "Add New Platform"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    "aria-labelledby": "transition-modal-title",
                    "aria-describedby": "transition-modal-description",
                    className: classesModal.modal,
                    open: open,
                    onClose: handleClose,
                    closeAfterTransition: true,
                    BackdropComponent: core_.Backdrop,
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                        in: open,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classesModal.paper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        scenario == 11 ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                minWidth: 150,
                                                margin: "10px 5px 20px 5px"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                fullWidth: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        children: "Platform"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                        value: addUpdatePlatform,
                                                        label: "platform",
                                                        onChange: handleChange,
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            fontSize: "18px"
                                                        },
                                                        children: [
                                                            shoutoutData[0]?.platform != 0 && shoutoutData[1]?.platform != 0 && shoutoutData[2]?.platform != 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 0,
                                                                children: "Instagram"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            shoutoutData[0]?.platform != 1 && shoutoutData[1]?.platform != 1 && shoutoutData[2]?.platform != 1 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 1,
                                                                children: "Youtube"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            shoutoutData[0]?.platform != 2 && shoutoutData[1]?.platform != 2 && shoutoutData[2]?.platform != 2 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 2,
                                                                children: "Twitter"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            component: "form",
                                            sx: {
                                                minWidth: 150,
                                                margin: "20px 5px 15px 5px"
                                            },
                                            noValidate: true,
                                            autoComplete: "off",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                className: classesModal.textfield,
                                                label: "Number of shoutouts per week",
                                                type: "number",
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                inputProps: {
                                                    min
                                                },
                                                value: addUpdateCPW,
                                                onChange: (e)=>{
                                                    if (e.target.value === "") {
                                                        setAddUpdateCPW(0);
                                                        return;
                                                    }
                                                    const value = +e.target.value;
                                                    if (value < min) {
                                                        setAddUpdateCPW(min);
                                                    } else {
                                                        setAddUpdateCPW(value);
                                                    }
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            component: "form",
                                            sx: {
                                                minWidth: 150,
                                                margin: "20px 5px 15px 5px"
                                            },
                                            noValidate: true,
                                            autoComplete: "off",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                className: classesModal.textfield,
                                                label: "Price (in ₹)",
                                                type: "number",
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                value: addUpdatePrice,
                                                onChange: (e)=>{
                                                    if (e.target.value === "") {
                                                        setAddUpdatePrice(0);
                                                        return;
                                                    }
                                                    const value = +e.target.value;
                                                    if (value < min) {
                                                        setAddUpdatePrice(min);
                                                    } else {
                                                        setAddUpdatePrice(value);
                                                    }
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                            style: {
                                                background: "#3B82F6",
                                                color: "white",
                                                marginBottom: "2px"
                                            },
                                            variant: "contained",
                                            onClick: ()=>{
                                                scenario == 11 ? addUpdateCPW > 0 && addUpdatePrice > 0 && addUpdatePlatform > -1 ? addNewPlatform() : setErrorMsg("Please select fill all above details") : updatePlatform();
                                            },
                                            children: scenario == 11 ? "Add New Platform" : "Update"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: classesModal.error,
                                    children: errorMsg
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    "aria-labelledby": "transition-modal-title",
                    "aria-describedby": "transition-modal-description",
                    className: classesModal.modal,
                    open: open_req,
                    onClose: handleClose_req,
                    closeAfterTransition: true,
                    BackdropComponent: core_.Backdrop,
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                        in: open_req,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classesModal.paper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "10px 5px 20px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Describe Your Shoutout Request"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                            type: "text",
                                            multiline: true,
                                            rows: 5,
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutMsg(e.target.value);
                                            }
                                        })
                                    ]
                                }),
                                linkDisplay >= 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink1(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(0);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink2(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 2 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(1);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 3 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink3(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 3 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(2);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 4 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink4(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 4 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(3);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay <= 3 ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                        style: {
                                            color: "#3B82F6",
                                            backgroundColor: "white",
                                            marginBottom: "2px"
                                        },
                                        variant: "contained",
                                        onClick: ()=>{
                                            setLinkDisplay(linkDisplay + 1);
                                        },
                                        children: "Add Link"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Button, {
                                    style: {
                                        background: "#3B82F6",
                                        color: "white",
                                        marginBottom: "2px"
                                    },
                                    variant: "contained",
                                    onClick: ()=>{},
                                    children: [
                                        "Request ",
                                        platform[scenario],
                                        " Shoutout"
                                    ]
                                })
                            ]
                        })
                    })
                }),
                count == 0 && onCreatorProfile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginTop: "15vh"
                    },
                    children: [
                        creator,
                        " doesn't support shoutouts."
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: shoutoutData?.map((shoutout)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "shoutout_colab_info",
                            children: [
                                platform[shoutout.platform],
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: platformUrlPrefix[shoutout.platform] + platformLink[shoutout.platform],
                                    style: {
                                        marginTop: "5px",
                                        marginLeft: "5px"
                                    },
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: platformLogo[shoutout.platform],
                                        alt: "",
                                        width: 30,
                                        height: 25
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shoutout_colab_info_per_platform",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: onCreatorProfile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Remaining This Week"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            color: "white"
                                                        },
                                                        className: "shoutout_colab_info_per_platform",
                                                        children: shoutout.count_per_week - shoutout.week_till_date_exhausted
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Total Per Week"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            color: "white"
                                                        },
                                                        className: "shoutout_colab_info_per_platform",
                                                        children: shoutout.count_per_week
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                    title: `View My ${platform[shoutout.platform]} Shoutout Requests`,
                                                    placement: "top",
                                                    className: classesModal.edit,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                        className: "pointer",
                                                        onClick: ()=>router_default().push({
                                                                pathname: "/shoutout",
                                                                query: {
                                                                    type: "user",
                                                                    platform: shoutout.platform
                                                                }
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "My Requests"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                style: {
                                                                    color: "white"
                                                                },
                                                                className: "shoutout_colab_info_per_platform",
                                                                children: shoutout.platform == 0 ? reqCountInsta : shoutout.platform == 1 ? reqCountTwitter : shoutout.platform == 2 ? reqCountYoutube : 0
                                                            })
                                                        ]
                                                    })
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                title: `View Requested ${platform[shoutout.platform]} Shoutout`,
                                                placement: "top",
                                                className: classesModal.edit,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                    className: "pointer",
                                                    onClick: ()=>router_default().push({
                                                            pathname: "/shoutout",
                                                            query: {
                                                                type: "creator",
                                                                platform: shoutout.platform,
                                                                creator: username
                                                            }
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Requested"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            style: {
                                                                color: "white"
                                                            },
                                                            className: "shoutout_colab_info_per_platform",
                                                            children: shoutout.platform == 0 ? reqCountInsta : shoutout.platform == 1 ? reqCountTwitter : reqCountYoutube
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    className: "shoutout_colab_info_per_platform",
                                                    children: "₹ " + shoutout.price
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                            title: onCreatorProfile ? `Request ${platform[shoutout.platform]} Shoutout` : "Edit",
                                            placement: "top",
                                            className: classesModal.edit,
                                            children: onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                style: {
                                                    background: "#3B82F6",
                                                    color: "white",
                                                    width: "20%"
                                                },
                                                variant: "contained",
                                                onClick: ()=>{
                                                    setScenario(shoutout.platform);
                                                    handleOpen_req();
                                                },
                                                children: "Request"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pointer",
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                },
                                                onClick: ()=>{
                                                    setScenario(shoutout.platform);
                                                    handleOpen();
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {})
                                            })
                                        })
                                    ]
                                })
                            ]
                        });
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_ShoutoutTab = (ShoutoutTab);

;// CONCATENATED MODULE: ./services/api-services/creator/colab_api.ts


// Backend Url
const colab_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Colab Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addCreatorColabData(platform, count_per_week, price) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                platform: platform,
                count_per_week: count_per_week,
                price: price
            };
            const response = await external_axios_default().post(colab_api_MAIN_API_URL + "colab", data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getCreatorColabData(creator) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(colab_api_MAIN_API_URL + "colab/" + creator, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateCreatorColabData(platform, count_per_week, price) {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const data = {
                count_per_week: count_per_week,
                price: price
            };
            const response = await external_axios_default().put(colab_api_MAIN_API_URL + "colab/" + platform.toString(), data, {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

// EXTERNAL MODULE: ./services/api-services/user/colab_api.ts
var colab_api = __webpack_require__(162);
;// CONCATENATED MODULE: ./components/ColabTab.tsx




















const ColabTab_useStylesModal = (0,core_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "scroll"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "white",
            // backgroundColor: "#3b82f6",
            padding: theme.spacing(2, 4, 3)
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "70px 20px 10px 0px"
        },
        edit: {
            margin: "10px",
            "&:hover": {
                color: "rgb(76, 175, 80)"
            }
        },
        error: {
            color: "red",
            fontSize: "16px",
            backgroundColor: "white",
            borderRadius: "5px"
        },
        textfield: {
            minWidth: "50vw",
            "& .MuiFormLabel-root": {
                fontSize: "18px"
            }
        }
    }));
const ColabTab_toolTipTheme = (0,core_.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const ColabTab = ({ creator , onCreatorProfile  })=>{
    const username = auth_services/* default.getUsername */.Z.getUsername();
    const [count, setCount] = (0,external_react_.useState)(1111);
    const [shoutoutData, setShoutoutData] = (0,external_react_.useState)([
        {
            platform: 0,
            count_per_week: 0,
            week_till_date_exhausted: 0,
            price: 0
        }
    ]);
    // const [userShoutoutData, setUserShoutoutData] = useState([
    //   {
    //     platform: 0,
    //     id: 0,
    //   },
    // ]);
    const [reqCountInsta, setReqCountInsta] = (0,external_react_.useState)(0);
    const [reqCountTwitter, setReqCountTwitter] = (0,external_react_.useState)(0);
    const [reqCountYoutube, setReqCountYoutube] = (0,external_react_.useState)(0);
    const GetDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                const result = await getCreatorColabData(creator);
                setShoutoutData(result);
                setCount(result.length);
            }
            getData();
        }, [
            username,
            creator
        ]);
    };
    GetDetails();
    const [user, setUser] = (0,external_react_.useState)({
        emailaddress: "",
        signuptype: 1,
        username: "",
        fname: "",
        lname: "",
        bio: "",
        iscreator: false,
        displaypicture: "",
        twitterhandle: "",
        instagram: "",
        youtube: "",
        website: ""
    });
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (username != "") {
                    const result = await (0,user_api/* getUserData */.is)(creator);
                    setUser(result[0]);
                }
            }
            getData();
        }, [
            username
        ]);
    };
    GetUser();
    const GetRequests = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (onCreatorProfile) {
                    const result = await (0,colab_api/* getUserColabData */.sL)();
                    // setUserShoutoutData(result);
                    for(var i = 0; i < result.length; i++){
                        if (result[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
                        else if (result[i].platform == 1) setReqCountTwitter(reqCountTwitter + 1);
                        else if (result[i].platform == 2) setReqCountYoutube(reqCountYoutube + 1);
                    }
                } else {
                    const result1 = await (0,colab_api/* getUserColabAllCreatorData */.ij)();
                    // setUserShoutoutData(result);
                    console.log(result1);
                    for(var i = 0; i < result1.length; i++){
                        if (result1[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
                        else if (result1[i].platform == 1) setReqCountTwitter(reqCountTwitter + 1);
                        else if (result1[i].platform == 2) setReqCountYoutube(reqCountYoutube + 1);
                    }
                }
            }
            getData();
        }, [
            onCreatorProfile ? creator : username
        ]);
    };
    GetRequests();
    const addNewPlatform = async ()=>{
        const result = await addCreatorColabData(addUpdatePlatform, addUpdateCPW, addUpdatePrice);
        if (typeof result !== "string") handleClose();
        else setErrorMsg(result);
    };
    const updatePlatform = async ()=>{
        const result = await updateCreatorColabData(scenario, addUpdateCPW, addUpdatePrice);
        if (typeof result !== "string") handleClose();
        else setErrorMsg(result);
    };
    const platform = [
        "Instagram",
        "Youtube",
        "Twitter"
    ];
    const platformLogo = [
        instagram/* default */.Z,
        youtube/* default */.Z,
        twitter/* default */.Z
    ];
    const platformLink = [
        user.instagram,
        user.youtube,
        user.twitterhandle
    ];
    const platformUrlPrefix = [
        "https://instagram.com/",
        "",
        "https://twitter.com/"
    ];
    const classesModal = ColabTab_useStylesModal();
    const [scenario, setScenario] = (0,external_react_.useState)(11); // 11: Add 0: Instagram 1: Youtube 2: Twitter
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [errorMsg, setErrorMsg] = (0,external_react_.useState)("");
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
        setErrorMsg("");
    };
    const [shoutoutMsg, setShoutoutMsg] = (0,external_react_.useState)("");
    const [linkDisplay, setLinkDisplay] = (0,external_react_.useState)(0);
    const [shoutoutLink1, setShoutoutLink1] = (0,external_react_.useState)("");
    const [shoutoutLink2, setShoutoutLink2] = (0,external_react_.useState)("");
    const [shoutoutLink3, setShoutoutLink3] = (0,external_react_.useState)("");
    const [shoutoutLink4, setShoutoutLink4] = (0,external_react_.useState)("");
    const [open_req, setOpen_req] = (0,external_react_.useState)(false);
    const [errorMsg_req, setErrorMsg_req] = (0,external_react_.useState)("");
    const handleOpen_req = ()=>setOpen_req(true);
    const handleClose_req = ()=>{
        setOpen_req(false);
        setErrorMsg_req("");
        setLinkDisplay(0);
    };
    const min = 0;
    const [addUpdatePlatform, setAddUpdatePlatform] = (0,external_react_.useState)(-1);
    const [addUpdateCPW, setAddUpdateCPW] = (0,external_react_.useState)(0);
    const [addUpdatePrice, setAddUpdatePrice] = (0,external_react_.useState)(0);
    const handleChange = (event)=>{
        setAddUpdatePlatform(event.target.value);
    };
    const instagramIndex = shoutoutData[0]?.platform == 0 ? 0 : shoutoutData[1]?.platform == 0 ? 1 : shoutoutData[2]?.platform == 0 ? 2 : null;
    const youtubeIndex = shoutoutData[0]?.platform == 1 ? 0 : shoutoutData[1]?.platform == 1 ? 1 : shoutoutData[2]?.platform == 1 ? 2 : null;
    const twitterIndex = shoutoutData[0]?.platform == 2 ? 0 : shoutoutData[1]?.platform == 2 ? 1 : shoutoutData[2]?.platform == 2 ? 2 : null;
    (0,external_react_.useEffect)(()=>{
        scenario == 0 ? setAddUpdatePrice(shoutoutData[instagramIndex]?.price) : scenario == 1 ? setAddUpdatePrice(shoutoutData[youtubeIndex]?.price) : scenario == 2 ? setAddUpdatePrice(shoutoutData[twitterIndex]?.price) : setAddUpdatePrice(addUpdatePrice);
    }, [
        scenario
    ]);
    (0,external_react_.useEffect)(()=>{
        scenario == 0 ? setAddUpdateCPW(shoutoutData[instagramIndex]?.count_per_week) : scenario == 1 ? setAddUpdateCPW(shoutoutData[youtubeIndex]?.count_per_week) : scenario == 2 ? setAddUpdateCPW(shoutoutData[twitterIndex]?.count_per_week) : setAddUpdateCPW(addUpdateCPW);
    }, [
        scenario
    ]);
    // console.log("reqCountInsta");
    // console.log(reqCountInsta);
    // console.log("reqCountTwitter");
    // console.log(reqCountTwitter);
    // console.log("reqCountYoutube");
    // console.log(reqCountYoutube);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center",
            textAlign: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ThemeProvider, {
            theme: ColabTab_toolTipTheme,
            children: [
                count < 3 && !onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    style: {
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px"
                    },
                    variant: "contained",
                    onClick: ()=>{
                        setScenario(11);
                        handleOpen();
                    },
                    children: "Add New Platform"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    "aria-labelledby": "transition-modal-title",
                    "aria-describedby": "transition-modal-description",
                    className: classesModal.modal,
                    open: open,
                    onClose: handleClose,
                    closeAfterTransition: true,
                    BackdropComponent: core_.Backdrop,
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                        in: open,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classesModal.paper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        scenario == 11 ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                minWidth: 150,
                                                margin: "10px 5px 20px 5px"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                fullWidth: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        children: "Platform"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                        value: addUpdatePlatform,
                                                        label: "platform",
                                                        onChange: handleChange,
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            fontSize: "18px"
                                                        },
                                                        children: [
                                                            shoutoutData[0]?.platform != 0 && shoutoutData[1]?.platform != 0 && shoutoutData[2]?.platform != 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 0,
                                                                children: "Instagram"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            shoutoutData[0]?.platform != 1 && shoutoutData[1]?.platform != 1 && shoutoutData[2]?.platform != 1 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 1,
                                                                children: "Youtube"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                            shoutoutData[0]?.platform != 2 && shoutoutData[1]?.platform != 2 && shoutoutData[2]?.platform != 2 ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                value: 2,
                                                                children: "Twitter"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            component: "form",
                                            sx: {
                                                minWidth: 150,
                                                margin: "20px 5px 15px 5px"
                                            },
                                            noValidate: true,
                                            autoComplete: "off",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                className: classesModal.textfield,
                                                label: "Number of shoutouts per week",
                                                type: "number",
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                inputProps: {
                                                    min
                                                },
                                                value: addUpdateCPW,
                                                onChange: (e)=>{
                                                    if (e.target.value === "") {
                                                        setAddUpdateCPW(0);
                                                        return;
                                                    }
                                                    const value = +e.target.value;
                                                    if (value < min) {
                                                        setAddUpdateCPW(min);
                                                    } else {
                                                        setAddUpdateCPW(value);
                                                    }
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            component: "form",
                                            sx: {
                                                minWidth: 150,
                                                margin: "20px 5px 15px 5px"
                                            },
                                            noValidate: true,
                                            autoComplete: "off",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                className: classesModal.textfield,
                                                label: "Price (in ₹)",
                                                type: "number",
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                value: addUpdatePrice,
                                                onChange: (e)=>{
                                                    if (e.target.value === "") {
                                                        setAddUpdatePrice(0);
                                                        return;
                                                    }
                                                    const value = +e.target.value;
                                                    if (value < min) {
                                                        setAddUpdatePrice(min);
                                                    } else {
                                                        setAddUpdatePrice(value);
                                                    }
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                            style: {
                                                background: "#3B82F6",
                                                color: "white",
                                                marginBottom: "2px"
                                            },
                                            variant: "contained",
                                            onClick: ()=>{
                                                scenario == 11 ? addUpdateCPW > 0 && addUpdatePrice > 0 && addUpdatePlatform > -1 ? addNewPlatform() : setErrorMsg("Please select fill all above details") : updatePlatform();
                                            },
                                            children: scenario == 11 ? "Add New Platform" : "Update"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: classesModal.error,
                                    children: errorMsg
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    "aria-labelledby": "transition-modal-title",
                    "aria-describedby": "transition-modal-description",
                    className: classesModal.modal,
                    open: open_req,
                    onClose: handleClose_req,
                    closeAfterTransition: true,
                    BackdropComponent: core_.Backdrop,
                    BackdropProps: {
                        timeout: 500
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                        in: open_req,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classesModal.paper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "10px 5px 20px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Describe Your Shoutout Request"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                            type: "text",
                                            multiline: true,
                                            rows: 5,
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutMsg(e.target.value);
                                            }
                                        })
                                    ]
                                }),
                                linkDisplay >= 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink1(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(0);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink2(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 2 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(1);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 3 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink3(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 3 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(2);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay >= 4 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            sx: {
                                                color: "#3B82F6"
                                            },
                                            children: "Link 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                            className: classesModal.textfield,
                                            placeholder: "Enter related link (if any) ...",
                                            type: "text",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "outlined",
                                            onChange: (e)=>{
                                                setShoutoutLink4(e.target.value);
                                            },
                                            InputProps: {
                                                // <-- This is where the toggle button is added.
                                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx(core_.InputAdornment, {
                                                    position: "end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        "aria-label": "toggle password visibility",
                                                        onClick: ()=>{},
                                                        style: {
                                                            color: "#3B82F6"
                                                        },
                                                        children: linkDisplay == 4 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: ()=>{
                                                                setLinkDisplay(3);
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                                title: "Delete",
                                                                placement: "bottom-start",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                linkDisplay <= 3 ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    component: "form",
                                    sx: {
                                        // minWidth: 150,
                                        margin: "20px 5px 15px 5px"
                                    },
                                    noValidate: true,
                                    autoComplete: "off",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                        style: {
                                            color: "#3B82F6",
                                            backgroundColor: "white",
                                            marginBottom: "2px"
                                        },
                                        variant: "contained",
                                        onClick: ()=>{
                                            setLinkDisplay(linkDisplay + 1);
                                        },
                                        children: "Add Link"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Button, {
                                    style: {
                                        background: "#3B82F6",
                                        color: "white",
                                        marginBottom: "2px"
                                    },
                                    variant: "contained",
                                    onClick: ()=>{},
                                    children: [
                                        "Request ",
                                        platform[scenario],
                                        " Shoutout"
                                    ]
                                })
                            ]
                        })
                    })
                }),
                count == 0 && onCreatorProfile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        marginTop: "15vh"
                    },
                    children: [
                        creator,
                        " doesn't support collabs."
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: shoutoutData?.map((shoutout)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "shoutout_colab_info",
                            children: [
                                platform[shoutout.platform],
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: platformUrlPrefix[shoutout.platform] + platformLink[shoutout.platform],
                                    style: {
                                        marginTop: "5px",
                                        marginLeft: "5px"
                                    },
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: platformLogo[shoutout.platform],
                                        alt: "",
                                        width: 30,
                                        height: 25
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shoutout_colab_info_per_platform",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: onCreatorProfile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Remaining This Week"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            color: "white"
                                                        },
                                                        className: "shoutout_colab_info_per_platform",
                                                        children: shoutout.count_per_week - shoutout.week_till_date_exhausted
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Total Per Week"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        style: {
                                                            color: "white"
                                                        },
                                                        className: "shoutout_colab_info_per_platform",
                                                        children: shoutout.count_per_week
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                    title: `View My ${platform[shoutout.platform]} Collab Requests`,
                                                    placement: "top",
                                                    className: classesModal.edit,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                        className: "pointer",
                                                        onClick: ()=>router_default().push({
                                                                pathname: "/collab",
                                                                query: {
                                                                    type: "user",
                                                                    platform: shoutout.platform
                                                                }
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "My Requests"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                style: {
                                                                    color: "white"
                                                                },
                                                                className: "shoutout_colab_info_per_platform",
                                                                children: shoutout.platform == 0 ? reqCountInsta : shoutout.platform == 1 ? reqCountTwitter : shoutout.platform == 2 ? reqCountYoutube : 0
                                                            })
                                                        ]
                                                    })
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                                title: `View Requested ${platform[shoutout.platform]} Collab`,
                                                placement: "top",
                                                className: classesModal.edit,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                                    className: "pointer",
                                                    onClick: ()=>router_default().push({
                                                            pathname: "/collab",
                                                            query: {
                                                                type: "creator",
                                                                platform: shoutout.platform,
                                                                creator: username
                                                            }
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Requested"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            style: {
                                                                color: "white"
                                                            },
                                                            className: "shoutout_colab_info_per_platform",
                                                            children: shoutout.platform == 0 ? reqCountInsta : shoutout.platform == 1 ? reqCountTwitter : reqCountYoutube
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "shoutout_colab_info_per_platform_per_field",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    className: "shoutout_colab_info_per_platform",
                                                    children: "₹ " + shoutout.price
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                                            title: onCreatorProfile ? `Request ${platform[shoutout.platform]} Shoutout` : "Edit",
                                            placement: "top",
                                            className: classesModal.edit,
                                            children: onCreatorProfile ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                style: {
                                                    background: "#3B82F6",
                                                    color: "white",
                                                    width: "20%"
                                                },
                                                variant: "contained",
                                                onClick: ()=>{
                                                    setScenario(shoutout.platform);
                                                    handleOpen_req();
                                                },
                                                children: "Request"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pointer",
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                },
                                                onClick: ()=>{
                                                    setScenario(shoutout.platform);
                                                    handleOpen();
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {})
                                            })
                                        })
                                    ]
                                })
                            ]
                        });
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_ColabTab = (ColabTab);

;// CONCATENATED MODULE: ./components/TipsTab.tsx




const TipsTab = ({ creator , onCreatorProfile  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        style: {
            justifyContent: "center",
            textAlign: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: coming_soon/* default */.Z,
            alt: "",
            width: 500,
            height: 500
        })
    });
};
/* harmony default export */ const components_TipsTab = (TipsTab);

;// CONCATENATED MODULE: ./components/StoreTab.tsx










const useStyles = (0,styles_.makeStyles)({
    tab: {
        fontSize: "16px",
        fontWeight: 500
    }
});
const StoreTab = ({ creator , onCreatorProfile  })=>{
    const classes = useStyles();
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let tabs_array = [
        /*#__PURE__*/ jsx_runtime_.jsx(components_ShoutoutTab, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 2),
        /*#__PURE__*/ jsx_runtime_.jsx(components_ColabTab, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 3),
        /*#__PURE__*/ jsx_runtime_.jsx(components_MerchandiseTab, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 1),
        /*#__PURE__*/ jsx_runtime_.jsx(components_TipsTab, {
            creator: creator,
            onCreatorProfile: onCreatorProfile
        }, 4)
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    value: value,
                    onChange: handleChange,
                    centered: true,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: "#3B82F6"
                        }
                    },
                    className: "nftTabs",
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Shoutout",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Collab",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Merch",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Perq",
                            className: classes.tab
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "90vw"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                    children: tabs_array[value]
                })
            })
        ]
    });
};
/* harmony default export */ const components_StoreTab = (StoreTab);


/***/ }),

/***/ 5502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SubscriptionTab)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Tab/Tab"
var Tab_ = __webpack_require__(1827);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@material-ui/core/Tabs/Tabs"
var Tabs_ = __webpack_require__(5388);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(3266);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react-jdenticon"
var external_react_jdenticon_ = __webpack_require__(7717);
var external_react_jdenticon_default = /*#__PURE__*/__webpack_require__.n(external_react_jdenticon_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./services/api-services/user_api.ts
var user_api = __webpack_require__(8196);
;// CONCATENATED MODULE: ./components/SubCard.tsx






const SubCard = ({ subscription  })=>{
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const [displayPicture, setDisplayPicture] = (0,external_react_.useState)("");
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (subscription.creator != "") {
                    const result = await (0,user_api/* getSpecificUserData */.A)(subscription.creator, "displaypicture");
                    setDisplayPicture(result[0]?.displaypicture);
                }
            }
            getData();
        }, [
            subscription.creator
        ]);
    };
    GetUser();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: subscription.creator ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "purchaseCard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "reqImage",
                        children: [
                            displayPicture != "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: displayPicture,
                                alt: "",
                                width: 50,
                                height: 50,
                                className: "creatorDP"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_jdenticon_default()), {
                                size: 50,
                                value: subscription.creator
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "hovergreen viewMore pointer",
                                style: {
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: "5px 0 0 15px"
                                },
                                onClick: ()=>router_default().push({
                                        pathname: "/creatorprofile",
                                        query: {
                                            address: subscription.creator
                                        }
                                    }),
                                children: subscription.creator
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%",
                            float: "left",
                            paddingLeft: "20px",
                            fontSize: 16,
                            justifyContent: "space-evenly",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                style: {
                                    fontSize: "15px",
                                    margin: "15px 0px 15px 0px"
                                },
                                children: [
                                    "Expires on",
                                    " ",
                                    new Date(Date.parse(subscription.expiry_date)).getDate() + " " + month[new Date(Date.parse(subscription.expiry_date)).getMonth()] + " " + new Date(Date.parse(subscription.expiry_date)).getFullYear()
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: subscription.type == 0 ? "Pending" : subscription.type == 1 ? "AcceptedAndWaiting" : "Completed",
                                style: {
                                    fontSize: "15px",
                                    textAlign: "center",
                                    borderRadius: "35%",
                                    margin: "15px 60px 25px 60px",
                                    justifyContent: "center",
                                    padding: "1px"
                                },
                                children: subscription.type == 0 ? "1 month" : subscription.type == 1 ? "3 month" : "1 year"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            margin: "140px"
                        }
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });
};
/* harmony default export */ const components_SubCard = (SubCard);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./services/auth-header.ts
var auth_header = __webpack_require__(6095);
;// CONCATENATED MODULE: ./services/api-services/user/vod_api.ts


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////
/////////////////////          VOD Table            ////////////
////////////////////////////////////////////////////////////////////////
async function addUserVODData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                type: type
            };
            const response = await axios.post(MAIN_API_URL + "user_vod", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserVODData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(MAIN_API_URL + "user_vod/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            console.log(response);
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserVODData(creator) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(MAIN_API_URL + "user_vod/" + creator, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserVODData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(MAIN_API_URL + "user_vod/" + creator, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./services/api-services/user/video_series_api.ts


// Backend Url
const video_series_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////
/////////////////////          Video Series Table            ///////////
////////////////////////////////////////////////////////////////////////
async function addUserVideoSeriesData(creator, seriesid, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                seriesid: seriesid,
                type: type
            };
            const response = await axios.post(video_series_api_MAIN_API_URL + "user_video_series", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserVideoSeriesData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(video_series_api_MAIN_API_URL + "user_video_series/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserVideoSeriesData(creator) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(video_series_api_MAIN_API_URL + "user_video_series/" + creator, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorSeriesIdUserVideoSeriesData(creator, seriesid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(video_series_api_MAIN_API_URL + "user_video_series/" + creator + "/" + seriesid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserVideoSeriesData(creator, seriesid, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(video_series_api_MAIN_API_URL + "user_video_series/" + creator + "/" + seriesid, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./services/api-services/user/livestream_api.ts


// Backend Url
const livestream_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////
/////////////////////          Live Stream Table            ////////////
////////////////////////////////////////////////////////////////////////
async function addUserLivestreamData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                type: type
            };
            const response = await axios.post(livestream_api_MAIN_API_URL + "user_livestream", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserLivestreamData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(livestream_api_MAIN_API_URL + "user_livestream/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserLivestreamData(creator) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(livestream_api_MAIN_API_URL + "user_livestream/" + creator, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserLivestreamData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(livestream_api_MAIN_API_URL + "user_livestream/" + creator, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./services/api-services/user/video_call_api.ts


// Backend Url
const video_call_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////
/////////////////////          Video Call Table             ////////////
////////////////////////////////////////////////////////////////////////
async function addUserVideoCallData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                creator: creator,
                type: type
            };
            const response = await axios.post(video_call_api_MAIN_API_URL + "user_video_call", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserVideoCallData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(video_call_api_MAIN_API_URL + "user_video_call/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificCreatorUserVideoCallData(creator) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(video_call_api_MAIN_API_URL + "user_video_call/" + creator, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserVideoCallData(creator, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(video_call_api_MAIN_API_URL + "user_video_call/" + creator, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./services/api-services/user/discord_api.ts


// Backend Url
const discord_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
///////////////////////////////////////////////////////////////////////////
/////////////////////          Discord Table            ///////////////////
///////////////////////////////////////////////////////////////////////////
async function addUserDiscordData(serverid, user_discord_id, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                serverid: serverid,
                user_discord_id: user_discord_id,
                type: type
            };
            const response = await axios.post(discord_api_MAIN_API_URL + "user_discord", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserDiscordData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(discord_api_MAIN_API_URL + "user_discord/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificServerUserDiscordData(serverid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(discord_api_MAIN_API_URL + "user_discord/" + serverid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserDiscordData(serverid, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(discord_api_MAIN_API_URL + "user_discord/" + serverid, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserDiscordLinkData(linkid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(discord_api_MAIN_API_URL + "user_discord/linkdata" + linkid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./services/api-services/user/community_combo_api.ts


// Backend Url
const community_combo_api_MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Community Combo Table            ////////////
////////////////////////////////////////////////////////////////////////////
async function addUserCommunityComboData(serverid, user_discord_id, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                serverid: serverid,
                user_discord_id: user_discord_id,
                type: type
            };
            const response = await axios.post(community_combo_api_MAIN_API_URL + "user_community_combo", data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getUserCommunityComboData() {
    try {
        if ((0,auth_header/* authHeader */.z)().Authorization) {
            const response = await external_axios_default().get(community_combo_api_MAIN_API_URL + "user_community_combo/allcreators", {
                headers: (0,auth_header/* authHeader */.z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getSpecificServerUserCommunityComboData(serverid) {
    try {
        if (authHeader().Authorization) {
            const response = await axios.get(community_combo_api_MAIN_API_URL + "user_community_combo/" + serverid, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateUserCommunityComboData(serverid, type) {
    try {
        if (authHeader().Authorization) {
            const data = {
                type: type
            };
            const response = await axios.put(community_combo_api_MAIN_API_URL + "user_community_combo/" + serverid, data, {
                headers: authHeader()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}

;// CONCATENATED MODULE: ./components/SubsCardGrid.tsx











const useStyles = (0,styles_.makeStyles)((theme)=>({
        paper: {
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }
    }));
const GridItem = ({ subscription , classes  })=>{
    return(// From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        xs: 12,
        sm: 6,
        md: 3,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SubCard, {
            subscription: subscription
        })
    }));
};
const SubsCardGrid = ({ category  })=>{
    const classes = useStyles();
    const [subData, setSubData] = (0,external_react_.useState)([
        {
            creator: "",
            expiry_date: "",
            type: 0
        }
    ]);
    const GetDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                let result = [];
                if (category == "Videos") result = await getUserVODData();
                else if (category == "Series") result = await getUserVideoSeriesData();
                else if (category == "Stream") result = await getUserLivestreamData();
                else if (category == "Meet") result = await getUserVideoCallData();
                else if (category == "Discord") result = await getUserDiscordData();
                else result = await getUserCommunityComboData();
                setSubData(result);
            }
            getData();
        }, []);
    };
    GetDetails();
    console.log(subData[0]?.expiry_date);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 1,
            children: subData.map((sub, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem, {
                        subscription: sub,
                        classes: classes
                    }, index)
                }))
        })
    });
};
/* harmony default export */ const components_SubsCardGrid = (SubsCardGrid);

// EXTERNAL MODULE: ./public/twitter.png
var twitter = __webpack_require__(4855);
// EXTERNAL MODULE: ./public/instagram.png
var instagram = __webpack_require__(405);
// EXTERNAL MODULE: ./public/youtube.png
var youtube = __webpack_require__(3457);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: ./components/PurchaseCard.tsx











const useStylesModal = (0,core_.makeStyles)((theme)=>({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "scroll"
        },
        paper: {
            width: "50%",
            backgroundColor: theme.palette.background.paper,
            // border: "2px solid #000",
            borderRadius: "5px",
            boxShadow: theme.shadows[5],
            color: "black",
            // backgroundColor: "#3b82f6",
            padding: theme.spacing(2, 4, 3)
        },
        button: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            width: "40%",
            margin: "70px 20px 10px 0px"
        },
        edit: {
            margin: "10px",
            "&:hover": {
                color: "rgb(76, 175, 80)"
            }
        },
        error: {
            color: "red",
            fontSize: "16px",
            backgroundColor: "white",
            borderRadius: "5px"
        },
        textfield: {
            minWidth: "100%",
            "& .MuiFormLabel-root": {
                fontSize: "18px"
            }
        }
    }));
const toolTipTheme = (0,core_.createTheme)({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "15px"
            }
        }
    }
});
const PurchaseCard = ({ request  })=>{
    const classesModal = useStylesModal();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const usermessage = request.usermessage.split("###--###");
    const creatorresponse = request.creatorresponse.split("###--###");
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const timeDiff = Date.now() - Date.parse(request.lastupdatedat);
    const platformLogo = [
        instagram/* default */.Z,
        youtube/* default */.Z,
        twitter/* default */.Z
    ];
    const [displayPicture, setDisplayPicture] = (0,external_react_.useState)("");
    const GetUser = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                if (request.creator != "") {
                    const result = await (0,user_api/* getSpecificUserData */.A)(request.creator, "displaypicture");
                    setDisplayPicture(result[0]?.displaypicture);
                }
            }
            getData();
        }, [
            request.creator
        ]);
    };
    GetUser();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: request.creator ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "purchaseCard",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "reqImage",
                        children: [
                            displayPicture != "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: displayPicture,
                                alt: "",
                                width: 50,
                                height: 50,
                                className: "creatorDP"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_jdenticon_default()), {
                                size: 50,
                                value: request.creator
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "hovergreen viewMore pointer",
                                style: {
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    padding: "5px 0 0 15px"
                                },
                                onClick: ()=>router_default().push({
                                        pathname: "/creatorprofile",
                                        query: {
                                            address: request.creator
                                        }
                                    }),
                                children: request.creator
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%",
                            float: "left",
                            paddingLeft: "20px",
                            fontSize: 16,
                            justifyContent: "center",
                            textAlign: "center",
                            marginTop: "5px"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    margin: "10px 0 15px 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: request.status == 0 ? "Pending" : request.status == 1 ? "AcceptedAndWaiting" : request.status == 2 ? "Completed" : "Rejected",
                                        style: {
                                            padding: "5px",
                                            fontSize: "15px",
                                            marginRight: "15px",
                                            textAlign: "center",
                                            borderRadius: "35%"
                                        },
                                        children: [
                                            request.status == 0 ? "Pending" : request.status == 1 ? "Approved" : request.status == 2 ? "Completed" : "Rejected",
                                            " "
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: platformLogo[request.platform],
                                        alt: "",
                                        width: 25,
                                        height: 25
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                style: {
                                    fontSize: "13px",
                                    color: "white",
                                    margin: "10px 0 15px 0"
                                },
                                children: [
                                    "Updated",
                                    " ",
                                    timeDiff > 86400000 ? new Date(Date.parse(request.lastupdatedat)).getDate() + " " + month[new Date(Date.parse(request.lastupdatedat)).getMonth()] + " " + new Date(Date.parse(request.lastupdatedat)).getFullYear() : timeDiff > 3600000 ? Math.round(timeDiff / 3600000) + "h ago" : timeDiff > 60000 ? Math.round(timeDiff / 60000) + "m ago" : timeDiff > 1000 ? Math.round(timeDiff / 1000) + "s ago" : ""
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            fontSize: "15px",
                            width: "100%"
                        },
                        className: "hovergreen viewMore pointer",
                        onClick: handleOpen,
                        children: "View More"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                        "aria-labelledby": "transition-modal-title",
                        "aria-describedby": "transition-modal-description",
                        className: classesModal.modal,
                        open: open,
                        onClose: handleClose,
                        closeAfterTransition: true,
                        BackdropComponent: core_.Backdrop,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Fade, {
                            in: open,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classesModal.paper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            margin: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    color: "#3B82F6",
                                                    fontWeight: "bold"
                                                },
                                                children: "Message To Creator"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                value: usermessage[0],
                                                className: classesModal.textfield,
                                                placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                type: "text",
                                                multiline: true,
                                                rows: 5,
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                onChange: (e)=>{
                                                // setShoutoutMsg(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    usermessage.map((mes, index)=>{
                                        return index != 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    style: {
                                                        color: "#3B82F6",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        "Link ",
                                                        index
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                    value: mes,
                                                    className: classesModal.textfield,
                                                    placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                    type: "url",
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    variant: "outlined",
                                                    onChange: (e)=>{
                                                    // setShoutoutMsg(e.target.value);
                                                    }
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            margin: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    color: "#3B82F6",
                                                    fontWeight: "bold"
                                                },
                                                children: "Creator Response"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                value: creatorresponse[0],
                                                className: classesModal.textfield,
                                                placeholder: "No Response From Creator Yet..",
                                                type: "text",
                                                multiline: true,
                                                rows: 5,
                                                InputLabelProps: {
                                                    shrink: true
                                                },
                                                variant: "outlined",
                                                onChange: (e)=>{
                                                // setShoutoutMsg(e.target.value);
                                                }
                                            })
                                        ]
                                    }),
                                    creatorresponse.map((mes, index)=>{
                                        return index != 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    style: {
                                                        color: "#3B82F6",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        "Link ",
                                                        index
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.TextField, {
                                                    value: mes,
                                                    className: classesModal.textfield,
                                                    placeholder: "Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",
                                                    type: "url",
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    variant: "outlined",
                                                    onChange: (e)=>{
                                                    // setShoutoutMsg(e.target.value);
                                                    }
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });
};
/* harmony default export */ const components_PurchaseCard = (PurchaseCard);

// EXTERNAL MODULE: ./services/api-services/user/shoutout_api.ts
var shoutout_api = __webpack_require__(2461);
// EXTERNAL MODULE: ./services/api-services/user/colab_api.ts
var colab_api = __webpack_require__(162);
// EXTERNAL MODULE: ./public/coming_soon.png
var coming_soon = __webpack_require__(774);
;// CONCATENATED MODULE: ./components/OneTimePurchaseTab.tsx









const OneTimePurchaseTab_useStyles = (0,styles_.makeStyles)((theme)=>({
        paper: {
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }
    }));
const OneTimePurchaseTab_GridItem = ({ request , classes  })=>{
    return(// From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PurchaseCard, {
            request: request
        })
    }));
};
const OneTimePurchaseTab = ({ category  })=>{
    const classes = OneTimePurchaseTab_useStyles();
    const [reqData, setReqData] = (0,external_react_.useState)([
        {
            creator: "",
            platform: 0,
            usermessage: "",
            creatorresponse: "",
            status: 0,
            lastupdatedat: ""
        }
    ]);
    const GetDetails = ()=>{
        (0,external_react_.useEffect)(()=>{
            async function getData() {
                let result = [];
                if (category == "Shoutout") result = await (0,shoutout_api/* getUserShoutoutData */.rE)();
                else if (category == "Collab") result = await (0,colab_api/* getUserColabData */.sL)();
                // else if (category == "Merch") result = await getUserVideoCallData();
                // else if (category == "PERQ") result = await getUserDiscordData();
                setReqData(result);
            }
            getData();
        }, []);
    };
    GetDetails();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "blueTextBlackBackground",
        children: category == "PERQ" || category == "Merch" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "blueTextBlackBackground",
            style: {
                justifyContent: "center",
                textAlign: "center"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: coming_soon/* default */.Z,
                alt: "",
                width: 500,
                height: 500
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 1,
            children: reqData.map((sub, index)=>/*#__PURE__*/ jsx_runtime_.jsx(OneTimePurchaseTab_GridItem, {
                    request: sub,
                    classes: classes
                }, index))
        })
    });
};
/* harmony default export */ const components_OneTimePurchaseTab = (OneTimePurchaseTab);

;// CONCATENATED MODULE: ./components/SubscriptionTab.tsx








const SubscriptionTab_useStyles = (0,styles_.makeStyles)({
    tab: {
        fontSize: "16px",
        fontWeight: 500
    }
});
const SubscriptionTab = ()=>{
    const classes = SubscriptionTab_useStyles();
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    let tabs_array = [
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Videos"
        }, 1),
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Series"
        }, 2),
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Stream"
        }, 3),
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Meet"
        }, 4),
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Discord"
        }, 5),
        /*#__PURE__*/ jsx_runtime_.jsx(components_SubsCardGrid, {
            category: "Community Combo"
        }, 6),
        /*#__PURE__*/ jsx_runtime_.jsx(components_OneTimePurchaseTab, {
            category: "Shoutout"
        }, 8),
        /*#__PURE__*/ jsx_runtime_.jsx(components_OneTimePurchaseTab, {
            category: "Collab"
        }, 9),
        /*#__PURE__*/ jsx_runtime_.jsx(components_OneTimePurchaseTab, {
            category: "Merch"
        }, 7),
        /*#__PURE__*/ jsx_runtime_.jsx(components_OneTimePurchaseTab, {
            category: "PERQ"
        }, 10)
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    value: value,
                    onChange: handleChange,
                    centered: true,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: "#3B82F6"
                        }
                    },
                    className: "nftTabs",
                    orientation: "vertical",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Videos",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Series",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Stream",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Meet",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Discord",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Community Combo",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Shoutout",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Collab",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Merch",
                            className: classes.tab
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "PERQ",
                            className: classes.tab
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "90vw"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                    children: tabs_array[value]
                })
            })
        ]
    });
};
/* harmony default export */ const components_SubscriptionTab = (SubscriptionTab);


/***/ }),

/***/ 4367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7791);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emoji_mart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1704);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket__WEBPACK_IMPORTED_MODULE_6__]);
_services_socket__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const VideoChat = ({ display , roomId  })=>{
    const username = _services_auth_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getUsername */ .Z.getUsername();
    const [showEmoji, setShowEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _services_socket__WEBPACK_IMPORTED_MODULE_6__/* .socket.on */ .W.on("FE-receive-message", ({ msg , sender  })=>{
            setMsg((msgs)=>[
                    ...msgs,
                    {
                        sender,
                        msg
                    }
                ]);
            console.log("receive message complete");
        });
    }, []);
    // Scroll to Bottom of Message List
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        scrollToBottom();
    }, [
        msg
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current.scrollIntoView({
            behavior: "smooth"
        });
    };
    const sendMessage = (e)=>{
        if (e.key === "Enter") {
            const msg = e.target.value;
            console.log("sendMessage");
            if (msg) {
                try {
                    _services_socket__WEBPACK_IMPORTED_MODULE_6__/* .socket.emit */ .W.emit("BE-send-message", {
                        roomId,
                        msg,
                        sender: username
                    });
                } catch (err) {
                    console.log(err);
                }
                console.log("Send Message Complete");
                inputRef.current.value = "";
            }
        }
    };
    const handleEmojiShow = ()=>{
        setShowEmoji((v)=>!v);
    };
    const handleEmojiSelect = (e)=>{
        inputRef.current.value += e.native;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChatContainer, {
        className: display ? "" : "width0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopHeader, {
                children: "CHAT"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatArea, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageList, {
                    children: [
                        msg && msg.map(({ sender , msg  }, idx)=>{
                            if (sender !== username) {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Message, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: sender
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: msg
                                        })
                                    ]
                                }, idx);
                            } else {
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UserMessage, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: sender
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: msg
                                        })
                                    ]
                                }, idx);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                float: "left",
                                clear: "both"
                            },
                            ref: messagesEndRef
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                        onClick: handleEmojiShow,
                        className: "fas",
                        icon: "smile",
                        style: {
                            color: "#4ea1d3",
                            padding: "5px 5px 0 5px"
                        }
                    }),
                    showEmoji && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(emoji_mart__WEBPACK_IMPORTED_MODULE_2__.Picker, {
                        style: {
                            width: "100%"
                        },
                        onSelect: handleEmojiSelect,
                        emojiSize: 30,
                        theme: "dark",
                        set: "twitter",
                        title: "Pick an emoji"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomInput, {
                        ref: inputRef,
                        onKeyUp: sendMessage,
                        placeholder: "Enter your message"
                    })
                ]
            })
        ]
    });
};
const ChatContainer = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  display: flex;
  flex-direction: column;
  width: 30%;
  hieght: 100%;
  background-color: #2d2d30;
  transition: all 0.5s ease;
  overflow: hidden;
  justify-content: center;
  border-radius: 0.5rem;
`;
const TopHeader = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  width: 100%;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  color: black;
  text-align: center;
  color: #3b82f6;
`;
const ChatArea = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  width: 100%;
  height: 83%;
  max-height: 83%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const MessageList = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  color: #454552;
`;
const Message = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 15px;
  text-align: left;

  > strong {
    color: #cbccd6;
    margin-left: 3px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px 3px #4ea1d3;
    font-size: 18px;
    overflow-wrap: word-break;
    word-break: break-word !important;
    overflow-y: visible;
  }
`;
const UserMessage = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  font-size: 16px;
  margin-top: 15px;
  text-align: right;

  > strong {
    color: #cbccd6;
    margin-right: 25px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    margin-right: 20px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    background-color: #4ea1d3;
    color: white;
    font-size: 18px;
    text-align: left;
    overflow-wrap: word-break;
    word-break: break-word !important;
    overflow-y: visible;
  }
`;
const BottomInput = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().textarea)`
  bottom: 0;
  width: 100%;
  font-size: 18px;
  color: black;
  background-color: white;
  padding: 5px 5px 5px 5px;
  border: 1px solid rgb(69, 69, 82, 0.25);
  box-sizing: border-box;
  border-radius: 0.5rem;
  overflow-y: visible;

  :focus {
    outline: none;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoChat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);




const VideoChatBottomBar = ({ clickChat , clickCameraDevice , goToBack , toggleCameraAudio , userVideoAudio , clickScreenSharing , screenShare , videoDevices , showVideoDevices , setShowVideoDevices  })=>{
    const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        setShowVideoDevices((state)=>!state);
    }, [
        setShowVideoDevices
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Bar, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Left, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CameraButton, {
                        onClick: toggleCameraAudio,
                        "data-switch": "video",
                        children: userVideoAudio.video ? // <FaIcon className="fas fa-video"></FaIcon>
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            className: "fas",
                            icon: "video"
                        }) : // <FaIcon className="fas fa-video-slash"></FaIcon>
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            className: "fas",
                            icon: "video-slash"
                        })
                    }),
                    showVideoDevices && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SwitchList, {
                        children: [
                            videoDevices.length > 0 && videoDevices.map((device)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: clickCameraDevice,
                                    "data-value": device.deviceId,
                                    children: device.label
                                }, device.deviceId);
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Switch Camera"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwitchMenu, {
                        onClick: handleToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                            className: "fas",
                            icon: "angle-up",
                            style: {
                                width: "12px"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AudioButton, {
                        onClick: toggleCameraAudio,
                        "data-switch": "audio",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: userVideoAudio.audio ? // <FaIcon className="fas fa-microphone"></FaIcon>
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                className: "fas",
                                icon: "microphone"
                            }) : // <FaIcon className="fas fa-microphone-slash"></FaIcon>
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                className: "fas",
                                icon: "microphone-slash"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Center, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatButton, {
                        onClick: clickChat,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                className: "fas",
                                icon: "comments"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScreenButton, {
                        onClick: clickScreenSharing,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                className: `fas ${screenShare ? "sharing" : ""}`,
                                icon: "desktop"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Right, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StopButton, {
                    onClick: goToBack,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        className: "fas",
                        icon: "circle-xmark"
                    })
                })
            })
        ]
    });
};
const Bar = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  // background-color: #4ea1d3;
  color: white;
  border-radius: 0.5rem;
`;
const Left = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  align-items: center;

  margin-left: 15px;
`;
const Center = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Right = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)``;
const ChatButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;
const ScreenButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;
const FaIcon = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().i)`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;
const StopButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 40px;
  height: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  line-height: 30px;
  margin-right: 15px;
  // background-color: #ee2560;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #f25483;
    cursor: pointer;
  }
`;
const CameraButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: relative;
  width: 80px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px 1px 5px 5px;
  margin: 0 20px 0 5px;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;
const AudioButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: relative;
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;
const SwitchMenu = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  position: absolute;
  width: 15px;
  padding: 1.5px;
  top: 7px;
  left: 80px;
  z-index: 1;

  :hover {
    background-color: #476d84;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;
const SwitchList = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -85px;
  left: 80px;
  background-color: #4ea1d3;
  color: white;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      background-color: #77b7dd;
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoChatBottomBar);


/***/ }),

/***/ 1600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const VideoChatCard = ({ peer  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        peer.on("stream", (stream)=>{
            ref.current.srcObject = stream;
        });
        peer.on("track", (track, stream)=>{});
    }, [
        peer
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Video, {
        playsInline: true,
        autoPlay: true,
        ref: ref
    });
};
const Video = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().video)``;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoChatCard);


/***/ }),

/***/ 2199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2673);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1655);
/* harmony import */ var _VideoChatCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1600);
/* harmony import */ var _VideoChatBottomBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7851);
/* harmony import */ var _VideoChat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4367);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket__WEBPACK_IMPORTED_MODULE_4__, _VideoChat__WEBPACK_IMPORTED_MODULE_7__]);
([_services_socket__WEBPACK_IMPORTED_MODULE_4__, _VideoChat__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const VideoChatRoom = ({ roomId , leaveRoomFunc  })=>{
    const username = _services_auth_services__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getUsername */ .Z.getUsername();
    const [peers, setPeers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [userVideoAudio, setUserVideoAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        localUser: {
            video: true,
            audio: true
        }
    });
    const [videoDevices, setVideoDevices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [displayChat, setDisplayChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [screenShare, setScreenShare] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showVideoDevices, setShowVideoDevices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const peersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const userVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const screenTrackRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const userStream = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Get Video Devices
        navigator.mediaDevices.enumerateDevices().then((devices)=>{
            const filtered = devices.filter((device)=>device.kind === "videoinput");
            setVideoDevices(filtered);
        });
        // Set Back Button Event
        window.addEventListener("popstate", goToBack);
        // Connect Camera & Mic
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then((stream)=>{
            userVideoRef.current.srcObject = stream;
            userStream.current = stream;
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-join-room", {
                roomId,
                userName: username
            });
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-user-join", (users)=>{
                // all users
                const peers = [];
                users.forEach(({ userId , info  })=>{
                    let { userName , video , audio  } = info;
                    if (userName !== username) {
                        const peer = createPeer(userId, _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.id */ .W.id, stream);
                        peer.userName = userName;
                        peer.peerID = userId;
                        peersRef.current.push({
                            peerID: userId,
                            peer,
                            userName
                        });
                        peers.push(peer);
                        setUserVideoAudio((preList)=>{
                            return {
                                ...preList,
                                [peer.userName]: {
                                    video,
                                    audio
                                }
                            };
                        });
                    }
                });
                setPeers(peers);
            });
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-receive-call", ({ signal , from , info  })=>{
                let { userName , video , audio  } = info;
                const peerIdx = findPeer(from);
                if (!peerIdx) {
                    const peer = addPeer(signal, from, stream);
                    peer.userName = userName;
                    peersRef.current.push({
                        peerID: from,
                        peer,
                        userName: userName
                    });
                    setPeers((users)=>{
                        return [
                            ...users,
                            peer
                        ];
                    });
                    setUserVideoAudio((preList)=>{
                        return {
                            ...preList,
                            [peer.userName]: {
                                video,
                                audio
                            }
                        };
                    });
                }
            });
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-call-accepted", ({ signal , answerId  })=>{
                const peerIdx = findPeer(answerId);
                peerIdx.peer.signal(signal);
            });
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-user-leave", ({ userId , userName  })=>{
                const peerIdx = findPeer(userId);
                peerIdx.peer.destroy();
                setPeers((users)=>{
                    users = users.filter((user)=>user.peerID !== peerIdx.peer.peerID);
                    return [
                        ...users
                    ];
                });
                peersRef.current = peersRef.current.filter(({ peerID  })=>peerID !== userId);
            });
        });
        _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-toggle-camera", ({ userId , switchTarget  })=>{
            const peerIdx = findPeer(userId);
            setUserVideoAudio((preList)=>{
                let video = preList[peerIdx.userName].video;
                let audio = preList[peerIdx.userName].audio;
                if (switchTarget === "video") video = !video;
                else audio = !audio;
                return {
                    ...preList,
                    [peerIdx.userName]: {
                        video,
                        audio
                    }
                };
            });
        });
    // return () => {
    //   socket.disconnect();
    // };
    // eslint-disable-next-line
    }, []);
    function createPeer(userId, caller, stream) {
        const peer = new (simple_peer__WEBPACK_IMPORTED_MODULE_2___default())({
            initiator: true,
            trickle: false,
            stream
        });
        peer.on("signal", (signal)=>{
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-call-user", {
                userToCall: userId,
                from: caller,
                signal
            });
        });
        peer.on("disconnect", ()=>{
            peer.destroy();
        });
        return peer;
    }
    function addPeer(incomingSignal, callerId, stream) {
        const peer = new (simple_peer__WEBPACK_IMPORTED_MODULE_2___default())({
            initiator: false,
            trickle: false,
            stream
        });
        peer.on("signal", (signal)=>{
            _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-accept-call", {
                signal,
                to: callerId
            });
        });
        peer.on("disconnect", ()=>{
            peer.destroy();
        });
        peer.signal(incomingSignal);
        return peer;
    }
    function findPeer(id) {
        return peersRef.current.find((p)=>p.peerID === id);
    }
    function createUserVideo(peer, index, arr) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoBox, {
            className: `width-peer${peers.length > 8 ? "" : peers.length} hide-video-controls`,
            onClick: expandScreen,
            children: [
                writeUserName(peer.userName, index),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
                        className: "fas expandIcon",
                        icon: "expand"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoChatCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    peer: peer
                }, index)
            ]
        }, index);
    }
    function writeUserName(userName, index) {
        if (userVideoAudio.hasOwnProperty(userName)) {
            if (!userVideoAudio[userName].video) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                    children: userName
                }, userName);
            }
        }
    }
    // Open Chat
    const clickChat = (e)=>{
        e.stopPropagation();
        setDisplayChat(!displayChat);
    };
    // BackButton
    const goToBack = (e)=>{
        e.preventDefault();
        _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-leave-room", {
            roomId,
            leaver: username
        });
        console.log("userStream.current");
        console.log(userStream.current);
        const userVideoTrack = userVideoRef.current.srcObject.getVideoTracks()[0];
        userVideoTrack.enabled = false;
        const userAudioTrack = userVideoRef.current.srcObject.getAudioTracks()[0];
        if (userAudioTrack) {
            userAudioTrack.enabled = false;
            userStream.current.getAudioTracks()[0].enabled = false;
        } else {
            userStream.current.getAudioTracks()[0].enabled = false;
        }
        userStream.current.getTracks().forEach((track)=>track.stop());
        userStream.current.getTracks().forEach(function(track) {
            console.log(track);
            console.log(track.readyState);
        });
        setUserVideoAudio((preList)=>{
            return {
                ...preList,
                localUser: {
                    video: false,
                    audio: false
                }
            };
        });
        leaveRoomFunc();
    // sessionStorage.removeItem("user");
    // window.location.href = "/";
    };
    const toggleCameraAudio = (e)=>{
        const target = e.target.getAttribute("data-switch");
        setUserVideoAudio((preList)=>{
            let videoSwitch = preList["localUser"].video;
            let audioSwitch = preList["localUser"].audio;
            if (target === "video") {
                const userVideoTrack = userVideoRef.current.srcObject.getVideoTracks()[0];
                videoSwitch = !videoSwitch;
                userVideoTrack.enabled = videoSwitch;
            } else {
                const userAudioTrack = userVideoRef.current.srcObject.getAudioTracks()[0];
                audioSwitch = !audioSwitch;
                if (userAudioTrack) {
                    userAudioTrack.enabled = audioSwitch;
                } else {
                    userStream.current.getAudioTracks()[0].enabled = audioSwitch;
                }
            }
            return {
                ...preList,
                localUser: {
                    video: videoSwitch,
                    audio: audioSwitch
                }
            };
        });
        _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-toggle-camera-audio", {
            roomId,
            switchTarget: target
        });
    };
    const clickScreenSharing = ()=>{
        if (!screenShare) {
            navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true
            }).then((stream)=>{
                const screenTrack = stream.getTracks()[0];
                peersRef.current.forEach(({ peer  })=>{
                    // replaceTrack (oldTrack, newTrack, oldStream);
                    peer.replaceTrack(peer.streams[0].getTracks().find((track)=>track.kind === "video"), screenTrack, userStream.current);
                });
                // Listen click end
                screenTrack.onended = ()=>{
                    peersRef.current.forEach(({ peer  })=>{
                        peer.replaceTrack(screenTrack, peer.streams[0].getTracks().find((track)=>track.kind === "video"), userStream.current);
                    });
                    userVideoRef.current.srcObject = userStream.current;
                    setScreenShare(false);
                };
                userVideoRef.current.srcObject = stream;
                screenTrackRef.current = screenTrack;
                setScreenShare(true);
            });
        } else {
            screenTrackRef.current.onended();
        }
    };
    const expandScreen = (e)=>{
        const elem = e.target;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */ elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */ elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */ elem.msRequestFullscreen();
        }
    };
    const clickBackground = ()=>{
        if (!showVideoDevices) return;
        setShowVideoDevices(false);
    };
    const clickCameraDevice = (event)=>{
        if (event && event.target && event.target.dataset && event.target.dataset.value) {
            const deviceId = event.target.dataset.value;
            const enabledAudio = userVideoRef.current.srcObject.getAudioTracks()[0].enabled;
            navigator.mediaDevices.getUserMedia({
                video: {
                    deviceId
                },
                audio: enabledAudio
            }).then((stream)=>{
                const newStreamTrack = stream.getTracks().find((track)=>track.kind === "video");
                const oldStreamTrack = userStream.current.getTracks().find((track)=>track.kind === "video");
                oldStreamTrack.stop();
                userStream.current.removeTrack(oldStreamTrack);
                userStream.current.addTrack(newStreamTrack);
                peersRef.current.forEach(({ peer  })=>{
                    // replaceTrack (oldTrack, newTrack, oldStream);
                    peer.replaceTrack(oldStreamTrack, newStreamTrack, userStream.current);
                });
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoomContainer, {
        onClick: clickBackground,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoAndBarContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoBox, {
                                className: `width-peer${peers.length > 8 ? "" : peers.length}`,
                                children: [
                                    userVideoAudio["localUser"].video ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                                        children: username
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
                                        className: "fas expandIcon pointer",
                                        icon: "expand"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyVideo, {
                                        onClick: expandScreen,
                                        ref: userVideoRef,
                                        muted: true,
                                        autoPlay: true,
                                        playsInline: true
                                    })
                                ]
                            }),
                            peers && peers.map((peer, index, arr)=>createUserVideo(peer, index, arr))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoChatBottomBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        clickScreenSharing: clickScreenSharing,
                        clickChat: clickChat,
                        clickCameraDevice: clickCameraDevice,
                        goToBack: goToBack,
                        toggleCameraAudio: toggleCameraAudio,
                        userVideoAudio: userVideoAudio["localUser"],
                        screenShare: screenShare,
                        videoDevices: videoDevices,
                        showVideoDevices: showVideoDevices,
                        setShowVideoDevices: setShowVideoDevices
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoChat__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                display: displayChat,
                roomId: roomId
            })
        ]
    });
};
const RoomContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  width: 100%;
  max-height: 100vh;
  flex-direction: row;
`;
const VideoContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  max-width: 100%;
  height: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  gap: 10px;
`;
const VideoAndBarContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const MyVideo = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().video)``;
const VideoBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover {
    > i {
      display: block;
    }
  }
`;
const UserName = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  position: absolute;
  font-size: calc(20px + 5vmin);
  z-index: 1;
`;
const FaIcon = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().i)`
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoChatRoom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1655);
/* harmony import */ var _VideoChatRoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2199);
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1704);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket__WEBPACK_IMPORTED_MODULE_4__, _VideoChatRoom__WEBPACK_IMPORTED_MODULE_5__]);
([_services_socket__WEBPACK_IMPORTED_MODULE_4__, _VideoChatRoom__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)((theme)=>({
        paper: {
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }
    }));
const VideoMeetTab = ({ creator , onCreatorProfile  })=>{
    const classes = useStyles();
    const username = _services_auth_services__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getUsername */ .Z.getUsername();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("FE-error-user-exist", ({ error  })=>{
            if (!error) {
                const roomName = onCreatorProfile ? creator : username;
                const userName = username;
            } else {
                console.log(error);
                console.log("User name already exist");
            }
        });
    }, [
        username
    ]);
    const [meetingJoined, setMeetingJoined] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const leaveRoomFunc = ()=>{
        setMeetingJoined(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "blueTextBlackBackground",
        children: !meetingJoined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "modelButton",
            style: {
                marginTop: "20vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    style: {
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px"
                    },
                    variant: "contained",
                    onClick: ()=>{
                        _services_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("BE-check-user", {
                            roomId: creator,
                            username
                        });
                        setMeetingJoined(true);
                    },
                    children: onCreatorProfile ? "Join Meet" : "Start Meet"
                }),
                onCreatorProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modelButton",
                    style: {
                        marginLeft: "20px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        style: {
                            background: "#3B82F6",
                            color: "white",
                            marginBottom: "2px"
                        },
                        variant: "contained",
                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_7___default().push({
                                pathname: "/updateprices"
                            }),
                        children: "Update Prices"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoChatRoom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            roomId: creator,
            leaveRoomFunc: leaveRoomFunc
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoMeetTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gl": () => (/* binding */ addCreatorLiveStreamData),
/* harmony export */   "Gn": () => (/* binding */ getCreatorLiveStreamData),
/* harmony export */   "Vo": () => (/* binding */ updateCreatorLiveStreamData)
/* harmony export */ });
/* unused harmony export MAIN_API_URL */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6095);


// Backend Url
const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator LiveStream Table            //////////////
////////////////////////////////////////////////////////////////////////////
async function addCreatorLiveStreamData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const data = {};
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(MAIN_API_URL + "livestream", data, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function getCreatorLiveStreamData(creator) {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MAIN_API_URL + "livestream/" + creator, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateCreatorLiveStreamData() {
    try {
        if ((0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)().Authorization) {
            const data = {};
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(MAIN_API_URL + "livestream", data, {
                headers: (0,_auth_header__WEBPACK_IMPORTED_MODULE_1__/* .authHeader */ .z)()
            });
            if (response.data.isSuccessful) {
                return response.data.result;
            } else {
                return response.data.errorMsg;
            }
        } else {
            return "Not Logged In";
        }
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 1655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__["default"])(process.env.NEXT_STATIC_MAIN_API_URL, {
    autoConnect: true,
    forceNew: true,
    // path: "/api/socket.io",
    timeout: 2000
}); // export const socket_ls = io(process.env.NEXT_STATIC_lIVE_STREAM_CHAT_API_URL, {
 //   autoConnect: true,
 //   forceNew: true,
 //   // path: "/api/socket.io",
 //   timeout: 2000,
 // });
 // console.log(socket_ls);
 // sockets.connect();
 // console.log("after connect");
 // console.log(sockets);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;