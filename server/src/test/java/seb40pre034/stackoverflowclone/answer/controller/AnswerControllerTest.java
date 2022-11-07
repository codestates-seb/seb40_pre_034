package seb40pre034.stackoverflowclone.answer.controller;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.util.UriComponentsBuilder;
import seb40pre034.stackoverflowclone.answer.dto.AnswerDto;
import seb40pre034.stackoverflowclone.answer.entity.Answer;
import seb40pre034.stackoverflowclone.answer.mapper.AnswerMapper;
import seb40pre034.stackoverflowclone.answer.service.AnswerService;

import java.net.URI;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@SpringBootTest
//@AutoConfigureMockMvc
//class AnswerControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    @MockBean
//    private AnswerService answerService;
//
//    @Autowired
//    private AnswerMapper mapper;
//
//    @Test
//    void postAnswer() throws Exception {
//
//        AnswerDto.Post post = new AnswerDto.Post("답변",null);
//
//        Answer answer = mapper.answerPostDtoToAnswer(post);
//
//        given(answerService.createAnswer(Mockito.any(Answer.class))).willReturn(answer);
//
//        String content = gson.toJson(post);
//
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/answers")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//        MvcResult result = actions
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.data.answer_content").value(post.getAnswer_content()))
//                .andReturn();
//
//        System.out.println(result.getResponse().getContentAsString());
//    }
//
//    @Test
//    void patchAnswer() throws Exception {
//
//        AnswerDto.Patch patch = new AnswerDto.Patch(1,"수정",null);
//
//        Answer answer = mapper.answerPatchDtoToAnswer(patch);
//        answer.setAnswer_content("수정");
//
//        given(answerService.updateAnswer(Mockito.any(Answer.class))).willReturn(answer);
//
//        String content = gson.toJson(patch);
//
//        ResultActions actions =
//                mockMvc.perform(
//                        MockMvcRequestBuilders.patch("/answers/edit/" + 1)
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        MvcResult result = actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.answer_content").value(patch.getAnswer_content()))
//                .andReturn();
//
//    }
//
//    @Test
//    void getAnswerTest() throws Exception {
//
//        Answer answer = new Answer(1L,"내용",0,null,null);
//
//        given(answerService.findAnswers(Mockito.anyLong())).willReturn(answer);
//
//        String content = gson.toJson(answer.getAnswerId());
//
//        ResultActions actions =
//                mockMvc.perform(
//                        MockMvcRequestBuilders.get("/answers/"+ answer.getAnswerId())
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        MvcResult result = actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.answerId").value(answer.getAnswerId()))
//                .andExpect(jsonPath("$.data.answer_content").value(answer.getAnswer_content()))
//                .andExpect(jsonPath("$.data.answer_vote").value(answer.getAnswer_vote()))
//                .andExpect(jsonPath("$.data.createdAt").value(answer.getCreatedAt()))
//                .andExpect(jsonPath("$.data.modifiedAt").value(answer.getModifiedAt()))
//                .andReturn();
//    }
//
//    @Test
//    void deleteAnswerTest() throws Exception {
//        long answerId = 1L;
//
//        doNothing().when(answerService).deleteAnswer(answerId);
//
//        ResultActions actions =
//                mockMvc.perform(
//                        delete("/answers/"+ answerId)
//                );
//
//        actions.andExpect(status().isNoContent());
//    }
//}