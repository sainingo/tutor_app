class Api::V1::TutorsController < ApplicationController
    def index
        @tutors = Tutor.all
        render json: @tutors
    end
end